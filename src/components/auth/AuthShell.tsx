import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThraivioHorizontal } from "@/components/shared/ThraivioLogos";

interface AuthShellProps {
  children: ReactNode;
  /** Right side of the header, e.g. "No account? Get started". */
  headerAction?: ReactNode;
}

/**
 * Shared frame for login, signup, forgot and reset password: logo that goes
 * home, an explicit "Back to home" link, and the legal footer line.
 */
const AuthShell = ({ children, headerAction }: AuthShellProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-card border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" aria-label="Thraivio home" className="shrink-0">
            <ThraivioHorizontal width={124} height={40} />
          </Link>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {headerAction}
            <Link
              to="/"
              className="hidden items-center gap-1.5 font-semibold text-foreground hover:text-primary sm:inline-flex"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-start justify-center px-4 py-10 sm:items-center sm:py-14">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="px-4 pb-8 text-center text-xs text-muted-foreground font-body">
        <Link to="/" className="mb-2 inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary sm:hidden">
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p>© {new Date().getFullYear()} Thraivio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthShell;
