import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { navLinks } from "./navData";
import { logoutUser } from "@/services/auth.service";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardPath, setDashboardPath] = useState("/user-dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const authUser = localStorage.getItem("authUser");

    if (accessToken && authUser) {
      try {
        const user = JSON.parse(authUser);

        setIsLoggedIn(true);

        if (user.role === "admin") {
          setDashboardPath("/admin");
        } else if (user.role === "mentor") {
          setDashboardPath("/mentor-dashboard");
        } else {
          setDashboardPath("/user-dashboard");
        }
      } catch {
        setIsLoggedIn(false);
        setDashboardPath("/user-dashboard");
      }
    } else {
      setIsLoggedIn(false);
      setDashboardPath("/user-dashboard");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("authUser");
    } finally {
      setIsLoggedIn(false);
      setOpen(false);
      navigate("/login");
    }
  };

  return (
    <div className="lg:hidden">

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          p-2
          rounded-xl
          hover:bg-blue-50
          hover:text-blue-700
          transition
          cursor-pointer
        "
      >
        {open ? <X size={24} /> : <Menu size={24} />}
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
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="border-t border-slate-100 my-2" />

            {isLoggedIn ? (
              <>
                {/* Dashboard */}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    navigate(dashboardPath);
                  }}
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
                    cursor-pointer
                  "
                >
                  Dashboard
                </button>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
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
                    cursor-pointer
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;