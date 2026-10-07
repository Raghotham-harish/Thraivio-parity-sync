import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import type { LoginFormData } from "@/types/auth";
import { loginUser } from "@/services/auth.service";
import { dashboardPathFor, safeRedirect } from "@/lib/auth";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25";

const LoginForm = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.password.trim()) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
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

      const response = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      const accessToken = response.data?.accessToken;
      const user = response.data?.user;
      if (!accessToken || !user) {
        throw new Error("Invalid login response.");
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("authUser", JSON.stringify(user));

      // Back to the page that asked for login, otherwise the dashboard for
      // the account's real role (admin / mentor / user).
      navigate(safeRedirect(params.get("redirect")) ?? dashboardPathFor(user.role), {
        replace: true,
      });
    } catch (error: any) {
      const message = error?.response
        ? error.response.data?.message || "Something went wrong. Please try again."
        : "We can't reach Thraivio right now. Please try again in a few minutes.";
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
        <label htmlFor="login-email" className="mb-1.5 block text-sm font-semibold text-foreground">
          Email address
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="login-password" className="text-sm font-semibold text-foreground">
            Password
          </label>
          <Link to="/forgot-password" className="text-xs font-semibold text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter your password"
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
      </div>

      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={formData.rememberMe}
          onChange={(e) => handleChange("rememberMe", e.target.checked)}
          className="cursor-pointer rounded accent-primary"
        />
        Remember me
      </label>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
