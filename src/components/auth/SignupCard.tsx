import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MailCheck } from "lucide-react";
import SignupForm from "./SignupForm";
import SocialLogin from "./SocialLogin";
import AudienceTabs, { type Audience } from "./AudienceTabs";

const SignupCard = () => {
  const [params] = useSearchParams();
  const [audience, setAudience] = useState<Audience>(
    params.get("as") === "member" ? "member" : "user"
  );
  const [successMessage, setSuccessMessage] = useState("");

  if (successMessage) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <span className="icon-bg-mint mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-[#065F46]">
          <MailCheck size={26} />
        </span>
        <h1 className="mt-5 font-heading text-2xl font-medium text-foreground">Account created</h1>
        <p className="mt-2 text-sm text-muted-foreground font-body">{successMessage}</p>
        <Link
          to={audience === "member" ? "/login?as=member" : "/login"}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary py-3.5 text-[15px] font-bold text-primary-foreground hover:bg-primary/90"
        >
          Continue to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h1 className="font-heading text-[28px] font-medium text-foreground">
        {audience === "member" ? "Join as a member" : "Create your account"}
      </h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground font-body">
        {audience === "member"
          ? "Coach or mentor on Thraivio: set your availability, pricing and programs."
          : "Find a coach or mentor, book sessions and join programs."}
      </p>

      <AudienceTabs value={audience} onChange={setAudience} label="I am joining as" />

      <div className="mt-6">
        <SignupForm role={audience === "member" ? "mentor" : "user"} onSuccess={setSuccessMessage} />
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-semibold text-muted-foreground">or sign up with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupCard;
