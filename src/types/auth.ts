export type UserRole = "user" | "mentor" | "admin";

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignupFormData {
  role: UserRole;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}