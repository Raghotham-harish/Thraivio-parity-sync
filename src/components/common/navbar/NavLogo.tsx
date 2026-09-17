import { Link } from "react-router-dom";

import { ThraivioHorizontal } from "@/components/shared/ThraivioLogos";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center shrink-0 group"
      aria-label="Thraivio home"
    >
      <ThraivioHorizontal width={149} height={48} />
    </Link>
  );
};

export default NavLogo;