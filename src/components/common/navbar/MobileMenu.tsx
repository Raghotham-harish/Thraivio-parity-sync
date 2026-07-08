import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "./navData";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          p-2
          rounded-xl
          hover:bg-blue-50
hover:text-blue-700
          transition
        "
      >
        {open ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            absolute
            top-20
            left-0
            w-full
            bg-white/90
backdrop-blur-2xl
border-slate-100
            border-t 
            shadow-2xl
          "
        >
          <div className="p-6 flex flex-col gap-3">

            {/* Navigation */}
            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    px-4
                    py-3
                    rounded-xl
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                        : ":text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="border-t border-slate-100 my-2" />

            {/* Login */}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="
border
border-blue-100
py-3
rounded-xl
text-center
font-medium
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

            {/* Create Profile */}
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
py-3
rounded-xl
text-center
font-medium
shadow-lg
shadow-blue-300/30
hover:from-blue-700
hover:to-cyan-600
transition-all
duration-300
"
            >
              Create Profile
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;