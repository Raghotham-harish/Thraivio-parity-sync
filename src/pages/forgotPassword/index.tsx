import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

import AuthShell from "@/components/auth/AuthShell";
import { forgotPassword } from "@/services/auth.service";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!validateEmail()) return;

    try {
      setLoading(true);

      const response = await forgotPassword(
        email.trim()
      );

      if (!response.success) {
        throw new Error(
          response.message ||
            "Unable to process your request."
        );
      }

      setSuccess(
        response.message ||
          "If an account exists with this email, a password reset link has been sent."
      );

      setEmail("");
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
    <AuthShell>
      {/* Card */}

      <div
        className="
          relative
          w-full
          
          bg-card
          border
          border-border
          rounded-2xl
          shadow-sm
          overflow-hidden
        "
      >

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
                icon-bg
                text-primary
              "
            >
              <Mail size={28} />
            </div>

            <h1 className="mt-5 font-heading text-[28px] font-medium text-foreground">
              Forgot Password?
            </h1>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Enter your email address and we'll
              send you a link to reset your password.
            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter your email"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-3
                  outline-none
                  transition-all
                  focus:border-primary
                  focus:ring-4
                  focus:ring-primary/20
                  disabled:opacity-70
                "
              />
            </div>

            {/* Success */}

            {success && (
              <div
                className="
                  rounded-xl
                  border
                  border-[#A7F3D0]
                  bg-[#ECFDF5]
                  px-4
                  py-3
                  text-sm
                  text-[#065F46]
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
                  border-destructive/20
                  bg-destructive/10
                  px-4
                  py-3
                  text-sm
                  text-destructive
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
                bg-primary
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-primary/90
                hover:shadow-xl
                cursor-pointer
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </button>
          </form>

          {/* Back to Login */}

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-primary
                hover:text-primary/80
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
    </AuthShell>
  );
};

export default ForgotPasswordPage;