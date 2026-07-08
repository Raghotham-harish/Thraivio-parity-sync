import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import RoleSelector from "./RoleSelector";
import PasswordStrength from "./PasswordStrength";
import TermsCheckbox from "./TermsCheckbox";

import type {
  SignupFormData,
} from "@/types/auth";

const SignupForm = () => {
  const [formData, setFormData] =
    useState<SignupFormData>({
      role: "user",

      fullName: "",

      email: "",

      password: "",

      confirmPassword: "",

      acceptedTerms: false,
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const updateField = (
    field: keyof SignupFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError(
        "Please enter a valid email"
      );
      return false;
    }

    if (formData.password.length < 8) {
      setError(
        "Password must be at least 8 characters"
      );
      return false;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );
      return false;
    }

    if (!formData.acceptedTerms) {
      setError(
        "Please accept Terms & Conditions"
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
       * Firebase Signup
       *
       * createUserWithEmailAndPassword(...)
       */

      /**
       * Backend Signup
       *
       * api.post("/auth/signup")
       */

      console.log(
        "Signup Data",
        formData
      );

      setTimeout(() => {
        setLoading(false);

        if (
          formData.role === "mentor"
        ) {
          console.log(
            "Redirect To Become Mentor Form"
          );
        } else {
          console.log(
            "Redirect To User Dashboard"
          );
        }
      }, 1500);
    } catch {
      setLoading(false);

      setError(
        "Something went wrong"
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
          updateField(
            "role",
            role
          )
        }
      />

      {/* Name */}

      <div>
        <label className="block text-sm font-semibold mb-2">
          Full Name
        </label>

        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            updateField(
              "fullName",
              e.target.value
            )
          }
          placeholder="Enter full name"
          className="
            w-full
            border
            border-slate-200
            rounded-xl
            px-4
            py-3
            focus:ring-4
            focus:ring-blue-100
            focus:border-blue-500
            outline-none
          "
        />
      </div>

      {/* Email */}

      <div>
        <label className="block text-sm font-semibold mb-2">
          Email Address
        </label>

        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            updateField(
              "email",
              e.target.value
            )
          }
          placeholder="Enter email"
          className="
            w-full
            border
            border-slate-200
            rounded-xl
            px-4
            py-3
            focus:ring-4
            focus:ring-blue-100
            focus:border-blue-500
            outline-none
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
              updateField(
                "password",
                e.target.value
              )
            }
            placeholder="Create password"
            className="
              w-full
              border
              border-slate-200
              rounded-xl
              px-4
              py-3
              pr-12
              focus:ring-4
              focus:ring-blue-100
              focus:border-blue-500
              outline-none
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
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        <PasswordStrength
          password={formData.password}
        />

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
            value={
              formData.confirmPassword
            }
            onChange={(e) =>
              updateField(
                "confirmPassword",
                e.target.value
              )
            }
            placeholder="Confirm password"
            className="
              w-full
              border
              border-slate-200
              rounded-xl
              px-4
              py-3
              pr-12
              focus:ring-4
              focus:ring-blue-100
              focus:border-blue-500
              outline-none
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

      {/* Terms */}

      <TermsCheckbox
        checked={
          formData.acceptedTerms
        }
        onChange={(value) =>
          updateField(
            "acceptedTerms",
            value
          )
        }
      />

      {/* Error */}

      {error && (
        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-600
            rounded-xl
            px-4
            py-3
            text-sm
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
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3.5
          rounded-xl
          font-semibold
          transition-all
          disabled:opacity-70
        "
      >
        {loading
          ? "Creating Account..."
          : `Create ${
              formData.role ===
              "mentor"
                ? "Mentor"
                : "User"
            } Account`}
      </button>

    </form>
  );
};

export default SignupForm;