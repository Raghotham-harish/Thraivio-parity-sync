import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";
import SignupCard from "@/components/auth/SignupCard";

const SignupPage = () => {
  return (
    <AuthShell
      headerAction={
        <span className="hidden md:inline">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </span>
      }
    >
      <SignupCard />
    </AuthShell>
  );
};

export default SignupPage;
