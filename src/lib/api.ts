import axios, {
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

/* =====================================================
   Types
===================================================== */

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

type RefreshSubscriber = {
  resolve: (accessToken: string) => void;
  reject: (error: unknown) => void;
};

/* =====================================================
   Refresh Token State
===================================================== */

let isRefreshing = false;

let refreshSubscribers: RefreshSubscriber[] = [];

/* =====================================================
   Refresh Subscribers
===================================================== */

const subscribeTokenRefresh = (
  resolve: (accessToken: string) => void,
  reject: (error: unknown) => void
) => {
  refreshSubscribers.push({
    resolve,
    reject,
  });
};

const onRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach(
    ({ resolve }) => {
      resolve(accessToken);
    }
  );

  refreshSubscribers = [];
};

const onRefreshFailed = (error: unknown) => {
  refreshSubscribers.forEach(
    ({ reject }) => {
      reject(error);
    }
  );

  refreshSubscribers = [];
};

/* =====================================================
   Request Interceptor
===================================================== */

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken =
      localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization =
        `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* =====================================================
   Response Interceptor
===================================================== */

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    const originalRequest =
      error.config as
        | RetryableRequestConfig
        | undefined;

    /* -----------------------------------------------
       Request config missing
    ------------------------------------------------ */

    if (!originalRequest) {
      return Promise.reject(error);
    }

    /* -----------------------------------------------
       Don't refresh refresh-token request
    ------------------------------------------------ */

    if (
      originalRequest.url?.includes(
        "/api/v1/auth/refresh-token"
      )
    ) {
      return Promise.reject(error);
    }

    /* -----------------------------------------------
       Don't refresh public auth requests
    ------------------------------------------------ */

    if (
      originalRequest.url?.includes(
        "/api/v1/auth/login"
      ) ||
      originalRequest.url?.includes(
        "/api/v1/auth/register"
      ) ||
      originalRequest.url?.includes(
        "/api/v1/auth/forgot-password"
      ) ||
      originalRequest.url?.includes(
        "/api/v1/auth/reset-password"
      )
    ) {
      return Promise.reject(error);
    }

    /* -----------------------------------------------
       Only handle 401
    ------------------------------------------------ */

    if (
      error.response?.status !== 401 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    /* =================================================
       If refresh is already running
    ================================================= */

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        subscribeTokenRefresh(
          (accessToken) => {
            originalRequest.headers.Authorization =
              `Bearer ${accessToken}`;

            resolve(
              api(originalRequest)
            );
          },
          (refreshError) => {
            reject(refreshError);
          }
        );
      });
    }

    /* =================================================
       Start refresh
    ================================================= */

    isRefreshing = true;

    try {
      const refreshResponse =
        await axios.post<{
          success: boolean;
          message: string;
          data: {
            accessToken: string;
          };
        }>(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/refresh-token`,
          {},
          {
            withCredentials: true,

            headers: {
              "Content-Type":
                "application/json",
            },
          }
        );

      const newAccessToken =
        refreshResponse.data?.data?.accessToken;

      /* -----------------------------------------------
         Token missing
      ------------------------------------------------ */

      if (!newAccessToken) {
        throw new Error(
          "Access token not received."
        );
      }

      /* -----------------------------------------------
         Save new token
      ------------------------------------------------ */

      localStorage.setItem(
        "accessToken",
        newAccessToken
      );

      /* -----------------------------------------------
         Resolve waiting requests
      ------------------------------------------------ */

      onRefreshed(newAccessToken);

      /* -----------------------------------------------
         Retry original request
      ------------------------------------------------ */

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      /* -----------------------------------------------
         Refresh failed
      ------------------------------------------------ */

      localStorage.removeItem(
        "accessToken"
      );

      localStorage.removeItem(
        "authUser"
      );

      onRefreshFailed(
        refreshError
      );

      return Promise.reject(
        refreshError
      );
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;