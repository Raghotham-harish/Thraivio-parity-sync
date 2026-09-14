import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center shrink-0 group"
    >
      <img
        src="/images/Nav-Logo.png"
        alt="Thryvio"
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default NavLogo;