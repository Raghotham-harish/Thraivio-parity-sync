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

/* -------------------------------- */
/* Request Interceptor */
/* -------------------------------- */

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

/* -------------------------------- */
/* Response Interceptor */
/* -------------------------------- */

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    const originalRequest =
      error.config as
        | InternalAxiosRequestConfig & {
            _retry?: boolean;
          }
        | undefined;

    /* --------------------------------
       If request config is missing
    -------------------------------- */

    if (!originalRequest) {
      return Promise.reject(error);
    }

    /* --------------------------------
       Do not refresh the refresh-token
       request itself
    -------------------------------- */

    if (
      originalRequest.url?.includes(
        "/api/v1/auth/refresh-token"
      )
    ) {
      return Promise.reject(error);
    }

    /* --------------------------------
   Do not refresh public auth
   requests
-------------------------------- */

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

    /* --------------------------------
       Handle Unauthorized Response
    -------------------------------- */

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        /* ------------------------------
           Request a new access token

           Refresh token is stored in the
           HTTP-only cookie, so no body
           is required.
        ------------------------------ */

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
          refreshResponse.data?.data
            ?.accessToken;

        /* ------------------------------
           Make sure new token exists
        ------------------------------ */

        if (!newAccessToken) {
          throw new Error(
            "Access token not received."
          );
        }

        /* ------------------------------
           Save new access token
        ------------------------------ */

        localStorage.setItem(
          "accessToken",
          newAccessToken
        );

        /* ------------------------------
           Update original request
        ------------------------------ */

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        /* ------------------------------
           Retry original request
        ------------------------------ */

        return api(originalRequest);
      } catch (refreshError) {
        /* ------------------------------
           Refresh failed

           Clear invalid authentication
           data from localStorage.
        ------------------------------ */

        localStorage.removeItem(
          "accessToken"
        );

        localStorage.removeItem(
          "authUser"
        );

        return Promise.reject(
          refreshError
        );
      }
    }

    return Promise.reject(error);
  }
);

export default api;