import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header
      className="
sticky
top-0
z-50
bg-white/80
backdrop-blur-2xl
border-b
border-slate-100
shadow-lg
shadow-slate-200/40
"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-22
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="
              px-5
              py-2.5
              rounded-xl
              border
              border-blue-100
text-slate-700
hover:bg-blue-50
hover:border-blue-300
hover:text-blue-700
              transition-all
              duration-300
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
px-5
py-2.5
rounded-xl
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
font-medium
shadow-lg
shadow-blue-300/50
hover:-translate-y-0.5
hover:from-blue-700
hover:to-cyan-600
transition-all
duration-300
"
          >
            Create Profile
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;