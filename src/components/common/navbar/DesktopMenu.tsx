import { NavLink } from "react-router-dom";
import { navLinks } from "./navData";

const DesktopMenu = () => {
  return (
    <nav className="hidden lg:flex items-center gap-2">

      {navLinks.map((item) => (
        <NavLink
          key={item.title}
          to={item.href}
          end
          className={({ isActive }) =>
            `
              relative
              px-5
              py-2.5
              rounded-xl
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                isActive
                  ? `
                    bg-gradient-to-r
from-blue-50
to-cyan-50
text-blue-700
shadow-md
                  `
                  : `
                    text-slate-700
                    hover:bg-blue-50
hover:text-blue-700
hover:-translate-y-0.5
                  `
              }
            `
          }
        >
          {({ isActive }) => (
            <>
              {item.title}

              {isActive && (
                <span
                  className="
absolute
bottom-0
left-1/2
-translate-x-1/2
h-1
w-8
rounded-full
bg-gradient-to-r
from-blue-600
to-cyan-500
"
                />
              )}
            </>
          )}
        </NavLink>
      ))}

    </nav>
  );
};

export default DesktopMenu;