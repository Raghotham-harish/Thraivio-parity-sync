import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import PasswordStrength from "./PasswordStrength";
import TermsCheckbox from "./TermsCheckbox";
import type { SignupFormData, UserRole } from "@/types/auth";
import { registerUser } from "@/services/auth.service";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25";

interface SignupFormProps {
  /** Chosen with the User / Member tabs above the form. */
  role: Extract<UserRole, "user" | "mentor">;
  onSuccess?: (message: string) => void;
}

type FormFields = Omit<SignupFormData, "role">;

const EMPTY: FormFields = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
};

const SignupForm = ({ role, onSuccess }: SignupFormProps) => {
  const [formData, setFormData] = useState<FormFields>(EMPTY);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: keyof FormFields, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError("Please enter a valid email");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (!formData.acceptedTerms) {
      setError("Please accept the Terms & Conditions");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setError("");

      const response = await registerUser({
        role,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        acceptedTerms: formData.acceptedTerms,
      });

      if (!response.success) {
        throw new Error(response.message || "Registration failed.");
      }

      onSuccess?.(response.message || "Your account has been created successfully.");
      setFormData(EMPTY);
    } catch (error: any) {
      const message = error?.response
        ? error.response.data?.message || "Something went wrong. Please try again."
        : error?.message === "Network Error" || !error?.message
          ? "We can't reach Thraivio right now. Please try again in a few minutes."
          : error.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {error && (
        <div role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="signup-name" className="mb-1.5 block text-sm font-semibold text-foreground">
          Full name
        </label>
        <input
          id="signup-name"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="mb-1.5 block text-sm font-semibold text-foreground">
          Email address
        </label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="you@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="mb-1.5 block text-sm font-semibold text-foreground">
          Password
        </label>
        <div className="relative">
          <input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            placeholder="At least 8 characters"
            className={`${inputClass} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <PasswordStrength password={formData.password} />
      </div>

      <div>
        <label htmlFor="signup-confirm" className="mb-1.5 block text-sm font-semibold text-foreground">
          Confirm password
        </label>
        <div className="relative">
          <input
            id="signup-confirm"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            placeholder="Re-enter your password"
            className={`${inputClass} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <TermsCheckbox
        checked={formData.acceptedTerms}
        onChange={(value) => updateField("acceptedTerms", value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Creating account…
          </>
        ) : role === "mentor" ? (
          "Create member account"
        ) : (
          "Create account"
        )}
      </button>
    </form>
  );
};

export default SignupForm;
