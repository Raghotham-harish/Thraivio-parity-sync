import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";
import LoginCard from "@/components/auth/LoginCard";

const LoginPage = () => {
  return (
    <AuthShell
      headerAction={
        <span className="hidden md:inline">
          New to Thraivio?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </span>
      }
    >
      <LoginCard />
    </AuthShell>
  );
};

export default LoginPage;
