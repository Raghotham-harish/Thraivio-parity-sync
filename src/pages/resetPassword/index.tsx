import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, LockKeyhole } from "lucide-react";

import { resetPassword } from "@/services/auth.service";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!token) {
      setError("Invalid or missing reset token.");
      return false;
    }

    if (!password) {
      setError("Password is required.");
      return false;
    }

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      return false;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await resetPassword({
        token: token!,
        password,
        confirmPassword,
      });

      if (!response.success) {
        throw new Error(
          response.message ||
            "Unable to reset password."
        );
      }

      setSuccess(
        response.message ||
          "Password reset successfully."
      );

      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 2000);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-indigo-50
        flex
        items-center
        justify-center
        px-4
        py-20
      "
    >
      {/* Background Blur Effects */}

      <div
        className="
          absolute
          -top-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-blue-300
          opacity-20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-indigo-300
          opacity-20
          blur-3xl
        "
      />

      {/* Card */}

      <div
        className="
          relative
          w-full
          max-w-md
          bg-white
          border
          border-slate-200
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Top Accent */}

        <div className="h-1 bg-blue-600 w-full" />

        <div className="p-8 lg:p-10">

          {/* Header */}

          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
                text-blue-600
              "
            >
              <LockKeyhole size={28} />
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Reset Password
            </h1>

            <p className="mt-3 text-slate-500 leading-relaxed">
              Create a new password for your account.
            </p>

          </div>

          {/* Invalid Token */}

          {!token && (
            <div
              className="
                mt-8
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
              Invalid or missing password reset link.
            </div>
          )}

          {/* Form */}

          {token && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {/* New Password */}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  New Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    placeholder="Enter new password"
                    disabled={loading}
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
                      disabled:opacity-70
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
                      cursor-pointer
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

              {/* Confirm Password */}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(
                        e.target.value
                      );
                      setError("");
                      setSuccess("");
                    }}
                    placeholder="Confirm new password"
                    disabled={loading}
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
                      disabled:opacity-70
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                      hover:text-blue-600
                      cursor-pointer
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Success */}

              {success && (
                <div
                  className="
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-4
                    py-3
                    text-sm
                    text-green-700
                  "
                >
                  {success}
                </div>
              )}

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

              {/* Submit */}

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
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {loading
                  ? "Resetting Password..."
                  : "Reset Password"}
              </button>
            </form>
          )}

          {/* Back to Login */}

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-blue-600
                hover:text-blue-700
                hover:underline
                cursor-pointer
              "
            >
              <ArrowLeft size={18} />
              Back to Login
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;