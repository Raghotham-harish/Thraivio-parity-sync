import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        gap-3
        group
      "
    >
      <div
        className="
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-blue-600
to-cyan-500
text-white
flex
items-center
justify-center
font-bold
text-lg
shadow-lg
shadow-blue-300/40
group-hover:scale-105
group-hover:rotate-2
transition-all
duration-300
"
      >
        CC
      </div>

      <div>
        <h2
          className="
            font-bold
            text-2xl
            text-slate-900
            tracking-tight
            group-hover:text-cyan-600
            transition-colors
          "
        >
          CoachCoaching
        </h2>

        <p className="text-xs text-slate-500 hidden md:block">
          Learn • Connect • Grow
        </p>
      </div>
    </Link>
  );
};

export default NavLogo;