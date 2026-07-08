import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import RoleSelector from "./RoleSelector";
import type { LoginFormData } from "@/types/auth";

const LoginForm = () => {
  const [formData, setFormData] =
    useState<LoginFormData>({
      role: "user",
      email: "",
      password: "",
      rememberMe: false,
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError(
        "Please enter a valid email address"
      );
      return false;
    }

    if (!formData.password.trim()) {
      setError("Password is required");
      return false;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return false;
    }

    setError("");

    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      /**
       * FUTURE FIREBASE LOGIN
       *
       * await signInWithEmailAndPassword(
       * auth,
       * formData.email,
       * formData.password
       * )
       */

      /**
       * FUTURE BACKEND LOGIN
       *
       * await api.post("/auth/login", formData)
       */

      console.log(
        "Login Data:",
        formData
      );

      setTimeout(() => {
        setLoading(false);

        if (
          formData.role === "mentor"
        ) {
          console.log(
            "Redirect Mentor Dashboard"
          );
        } else {
          console.log(
            "Redirect User Dashboard"
          );
        }
      }, 1500);
    } catch (err) {
      setLoading(false);

      setError(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Role */}

      <RoleSelector
        value={formData.role}
        onChange={(role) =>
          handleChange("role", role)
        }
      />

      {/* Email */}

      <div>
        <label className="block text-sm font-semibold mb-2">
          Email Address
        </label>

        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            handleChange(
              "email",
              e.target.value
            )
          }
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            outline-none
            transition-all
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />
      </div>

      {/* Password */}

      <div>
        <label className="block text-sm font-semibold mb-2">
          Password
        </label>

        <div className="relative">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={formData.password}
            onChange={(e) =>
              handleChange(
                "password",
                e.target.value
              )
            }
            placeholder="Enter password"
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              pr-12
              outline-none
              transition-all
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              hover:text-blue-600
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me + Forgot */}

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(e) =>
              handleChange(
                "rememberMe",
                e.target.checked
              )
            }
            className="rounded"
          />

          Remember Me
        </label>

        <button
          type="button"
          className="
            text-sm
            text-blue-600
            hover:text-blue-700
            hover:underline
          "
        >
          Forgot Password?
        </button>
      </div>

      {/* Error */}

      {error && (
        <div
          className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-600
          "
        >
          {error}
        </div>
      )}

      {/* Login Button */}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-blue-600
          py-3.5
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-700
          hover:shadow-xl
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {loading
          ? "Signing In..."
          : `Sign In as ${
              formData.role === "mentor"
                ? "Mentor"
                : "User"
            }`}
      </button>
    </form>
  );
};

export default LoginForm;