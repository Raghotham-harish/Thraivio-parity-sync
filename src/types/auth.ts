export type UserRole =
  | "user"
  | "mentor";

export interface LoginFormData {
  role: UserRole;
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