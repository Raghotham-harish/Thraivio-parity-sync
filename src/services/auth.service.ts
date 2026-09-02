import api from "@/lib/api";
import type {
  SignupFormData,
  LoginFormData,
} from "@/types/auth";

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
  avatar: string;
  phone: string;
  isVerified: boolean;
  isActive: boolean;
  profileCompleted: boolean;
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

interface AuthResponseData {
  user: AuthUser;
  accessToken: string;
}

/* =========================
   Register
========================= */

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: AuthResponseData;
}

export const registerUser = async (
  data: SignupFormData
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/api/v1/auth/register",
    data
  );

  return response.data;
};

/* =========================
   Login
========================= */

export interface LoginResponse {
  success: boolean;
  message: string;
  data: AuthResponseData;
}

export const loginUser = async (
  data: LoginFormData
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/api/v1/auth/login",
    data
  );

  return response.data;
};

/* =========================
   Forgot Password
========================= */

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export const forgotPassword = async (
  email: string
): Promise<ForgotPasswordResponse> => {
  const response =
    await api.post<ForgotPasswordResponse>(
      "/api/v1/auth/forgot-password",
      { email }
    );

  return response.data;
};

/* =========================
   Reset Password
========================= */

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export const resetPassword = async (data: {
  token: string;
  password: string;
  confirmPassword: string;
}): Promise<ResetPasswordResponse> => {
  const response =
    await api.post<ResetPasswordResponse>(
      "/api/v1/auth/reset-password",
      data
    );

  return response.data;
};

/* =========================
   Refresh Access Token
========================= */

export interface RefreshTokenResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}

export const refreshAccessToken =
  async (): Promise<string> => {
    const response =
      await api.post<RefreshTokenResponse>(
        "/api/v1/auth/refresh-token"
      );

    const accessToken =
      response.data?.data?.accessToken;

    if (!accessToken) {
      throw new Error(
        "Access token not received."
      );
    }

    localStorage.setItem(
      "accessToken",
      accessToken
    );

    return accessToken;
  };

/* =========================
   Current User
========================= */

export const getCurrentUser =
  async (): Promise<AuthUser> => {
    const response = await api.get<{
      success: boolean;
      message: string;
      data: AuthUser;
    }>("/api/v1/auth/me");

    return response.data.data;
  };

/* =========================
   Logout
========================= */

export interface LogoutResponse {
  success: boolean;
  message: string;
}

export const logoutUser =
  async (): Promise<LogoutResponse> => {
    const response =
      await api.post<LogoutResponse>(
        "/api/v1/auth/logout"
      );

    localStorage.removeItem("accessToken");
    localStorage.removeItem("authUser");

    return response.data;
  };

/* =========================
   Change Password
========================= */

export interface ChangePasswordResponse {
  success: boolean;
  message: string;
}

export const changePassword = async (data: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<ChangePasswordResponse> => {
  const response =
    await api.patch<ChangePasswordResponse>(
      "/api/v1/auth/change-password",
      data
    );

  return response.data;
};