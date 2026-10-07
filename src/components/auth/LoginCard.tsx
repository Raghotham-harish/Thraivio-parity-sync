import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";
import AudienceTabs, { type Audience } from "./AudienceTabs";

const COPY: Record<Audience, { title: string; subtitle: string }> = {
  user: {
    title: "Welcome back",
    subtitle: "Sign in to book sessions, join programs and track your growth.",
  },
  member: {
    title: "Member sign in",
    subtitle: "Sign in to manage your profile, bookings, programs and earnings.",
  },
};

const LoginCard = () => {
  const [params] = useSearchParams();
  const [audience, setAudience] = useState<Audience>(
    params.get("as") === "member" ? "member" : "user"
  );
  const copy = COPY[audience];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h1 className="font-heading text-[28px] font-medium text-foreground">{copy.title}</h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground font-body">{copy.subtitle}</p>

      <AudienceTabs value={audience} onChange={setAudience} label="I am signing in as" />

      <div className="mt-6">
        <LoginForm />
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-semibold text-muted-foreground">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {audience === "member" ? "Want to coach on Thraivio? " : "Don't have an account? "}
        <Link
          to={audience === "member" ? "/signup?as=member" : "/signup"}
          className="font-semibold text-primary hover:underline"
        >
          {audience === "member" ? "Become a member" : "Create account"}
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
