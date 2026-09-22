import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  ChevronDown,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import { logoutUser } from "@/services/auth.service";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardPath, setDashboardPath] =
    useState("/user-dashboard");

  const [organisationOpen, setOrganisationOpen] =
    useState(false);

  useEffect(() => {
    const accessToken =
      localStorage.getItem("accessToken");

    const authUser =
      localStorage.getItem("authUser");

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
      navigate("/login");
    }
  };

  const solutions = [
    {
      icon: BarChart3,
      title: "Leadership Pipeline",
      description:
        "Develop your next generation of leaders",
    },
    {
      icon: Users,
      title: "Team Effectiveness",
      description:
        "Transform group dynamics and trust",
    },
    {
      icon: Sparkles,
      title: "Executive Coaching",
      description:
        "1:1 coaching for C-suite and VPs",
    },
    {
      icon: Network,
      title: "DEI & Belonging",
      description:
        "Purpose-built for inclusive leadership",
    },
    {
      icon: ShieldCheck,
      title: "Well-being at Scale",
      description:
        "Prevent burnout across your workforce",
    },
    {
      icon: GraduationCap,
      title: "Custom Learning Journeys",
      description:
        "White-labelled programs with full analytics",
    },
  ];

  const organisations = [
    {
      icon: Building2,
      title: "Enterprise (1,000+)",
      description:
        "Global programs, SSO & custom analytics",
    },
    {
      icon: Building2,
      title: "Mid-market (100–999)",
      description:
        "Scalable cohorts with a success manager",
    },
    {
      icon: Building2,
      title: "SMEs & Scale-ups",
      description:
        "Starter plans from 20 employees",
    },
    {
      icon: GraduationCap,
      title: "Universities & Non-profits",
      description:
        "Special pricing for educational bodies",
    },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white
        border-b
        border-[#E6EBF2]
      "
    >
      {/* ================================
          MAIN NAVBAR
      ================================= */}

      <div
        className="
          h-[70px]
          w-full
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          xl:px-0
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <NavLogo />

        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
            xl:gap-12
            absolute
            left-1/2
            -translate-x-1/2
          "
        >
          <Link
            to="/mentors"
            className="
              text-[14px]
              font-semibold
              text-[#42526B]
              hover:text-[#155DFC]
              transition-colors
              whitespace-nowrap
            "
          >
            Find a Coach
          </Link>

          <Link
            to="/programs"
            className="
              text-[14px]
              font-semibold
              text-[#42526B]
              hover:text-[#155DFC]
              transition-colors
              whitespace-nowrap
            "
          >
            Programs & Events
          </Link>

          {/* ORGANISATIONS */}

          <div
            className="relative h-[88px] flex items-center"
            onMouseEnter={() =>
              setOrganisationOpen(true)
            }
            onMouseLeave={() =>
              setOrganisationOpen(false)
            }
          >
            <button
              type="button"
              onClick={() =>
                setOrganisationOpen(
                  (previous) => !previous
                )
              }
              className="
                flex
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#42526B]
                hover:text-[#155DFC]
                transition-colors
                whitespace-nowrap
                cursor-pointer
              "
            >
              For Organisations

              <ChevronDown
                size={17}
                strokeWidth={2.2}
                className={`
                  transition-transform
                  duration-200
                  ${organisationOpen
                    ? "rotate-180"
                    : ""
                  }
                `}
              />
            </button>
          </div>
        </nav>

        {/* ================================
            RIGHT ACTIONS
        ================================= */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-7
            ml-auto
          "
        >
          {isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={() =>
                  navigate(dashboardPath)
                }
                className="
                  text-[14px]
                  font-semibold
                  text-[#334155]
                  hover:text-[#155DFC]
                  transition-colors
                  cursor-pointer
                "
              >
                Dashboard
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  h-[46px]
                  px-6
                  rounded-[10px]
                  bg-[#155DFC]
                  text-white
                  text-[14px]
                  font-semibold
                  hover:bg-[#0F4ED8]
                  transition-colors
                  duration-200
                  cursor-pointer
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="
                  text-[14px]
                  font-semibold
                  text-[#334155]
                  hover:text-[#155DFC]
                  transition-colors
                "
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="
                  h-[46px]
                  px-6
                  rounded-[10px]
                  bg-[#155DFC]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[14px]
                  font-semibold
                  hover:bg-[#0F4ED8]
                  transition-colors
                  duration-200
                  whitespace-nowrap
                "
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* MOBILE */}

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      {/* =====================================================
          ORGANISATION MEGA MENU
      ====================================================== */}

      {organisationOpen && (
        <div
          className="
            hidden
            lg:block
            absolute
            top-[88px]
            left-0
            right-0
            z-50
          "
          onMouseEnter={() =>
            setOrganisationOpen(true)
          }
          onMouseLeave={() =>
            setOrganisationOpen(false)
          }
        >
          {/* Background overlay */}

          <div
            className="
              absolute
              inset-0
              h-[calc(100vh-88px)]
              bg-slate-900/5
              backdrop-blur-[1px]
              pointer-events-none
            "
          />

          {/* MEGA MENU */}

          <div
            className="
              relative
              w-[1100px]
              max-w-[calc(100vw-48px)]
              mx-auto
              mt-1
              bg-white
              rounded-[22px]
              border
              border-[#DDE5F0]
              shadow-[0_24px_70px_rgba(15,23,42,0.16)]
              overflow-hidden
            "
          >
            {/* MAIN CONTENT */}

            <div className="grid grid-cols-[1.55fr_0.95fr_0.72fr]">
              {/* ================================
                  SOLUTIONS
              ================================= */}

              <div
                className="
                  px-8
                  py-8
                  border-r
                  border-[#E3E8F0]
                "
              >
                <p
                  className="
                    mb-6
                    text-[12px]
                    font-bold
                    tracking-[1.4px]
                    text-[#155DFC]
                  "
                >
                  SOLUTIONS
                </p>

                <div className="grid grid-cols-2 gap-x-7 gap-y-8">
                  {solutions.map(
                    ({
                      icon: Icon,
                      title,
                      description,
                    }) => (
                      <Link
                        key={title}
                        to="#"
                        className="
                          flex
                          gap-3
                          group
                        "
                      >
                        <div
                          className="
                            w-9
                            h-9
                            rounded-[10px]
                            bg-[#EEF4FF]
                            flex
                            items-center
                            justify-center
                            shrink-0
                            group-hover:bg-[#E2ECFF]
                            transition-colors
                          "
                        >
                          <Icon
                            size={19}
                            strokeWidth={2.3}
                            className="text-[#155DFC]"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3
                            className="
                              text-[14px]
                              font-bold
                              text-[#172033]
                              leading-5
                              group-hover:text-[#155DFC]
                              transition-colors
                            "
                          >
                            {title}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              leading-[18px]
                              text-[#8291AA]
                              max-w-[150px]
                            "
                          >
                            {description}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* ================================
                  WHO WE SERVE
              ================================= */}

              <div
                className="
                  px-7
                  py-8
                  border-r
                  border-[#E3E8F0]
                "
              >
                <p
                  className="
                    mb-6
                    text-[12px]
                    font-bold
                    tracking-[1.4px]
                    text-[#155DFC]
                  "
                >
                  WHO WE SERVE
                </p>

                <div className="space-y-7">
                  {organisations.map(
                    ({
                      icon: Icon,
                      title,
                      description,
                    }) => (
                      <Link
                        key={title}
                        to="#"
                        className="
                          flex
                          gap-3
                          group
                        "
                      >
                        <div
                          className="
                            w-9
                            h-9
                            rounded-[10px]
                            bg-[#EEF4FF]
                            flex
                            items-center
                            justify-center
                            shrink-0
                            group-hover:bg-[#E2ECFF]
                            transition-colors
                          "
                        >
                          <Icon
                            size={19}
                            strokeWidth={2.2}
                            className="text-[#155DFC]"
                          />
                        </div>

                        <div>
                          <h3
                            className="
                              text-[14px]
                              font-bold
                              text-[#172033]
                              leading-5
                              group-hover:text-[#155DFC]
                              transition-colors
                            "
                          >
                            {title}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              leading-[18px]
                              text-[#8291AA]
                              max-w-[185px]
                            "
                          >
                            {description}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* ================================
                  QUICK LINKS
              ================================= */}

              <div className="px-7 py-8">
                <p
                  className="
                    mb-6
                    text-[12px]
                    font-bold
                    tracking-[1.4px]
                    text-[#155DFC]
                  "
                >
                  QUICK LINKS
                </p>

                <div className="space-y-5">
                  {[
                    "Pricing",
                    "Request a Demo",
                    "Case Studies",
                    "ROI Calculator",
                  ].map((item) => (
                    <Link
                      key={item}
                      to="#"
                      className="
                        flex
                        items-center
                        gap-3
                        text-[14px]
                        font-semibold
                        text-[#42526B]
                        hover:text-[#155DFC]
                        transition-colors
                        group
                      "
                    >
                      <ArrowRight
                        size={19}
                        strokeWidth={2}
                        className="
                          text-[#52627A]
                          group-hover:text-[#155DFC]
                          transition-colors
                        "
                      />

                      <span>{item}</span>
                    </Link>
                  ))}
                </div>

                {/* CASE STUDY */}

                <div
                  className="
                    mt-9
                    rounded-[15px]
                    border
                    border-[#D6E1F1]
                    bg-[#F7FAFF]
                    p-4
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-bold
                      tracking-[1px]
                      text-[#155DFC]
                    "
                  >
                    CASE STUDY
                  </p>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-[18px]
                      font-bold
                      text-[#172033]
                    "
                  >
                    Global tech firm cut senior
                    attrition 34% in 12 months
                  </p>

                  <Link
                    to="#"
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      text-[12px]
                      font-bold
                      text-[#155DFC]
                      hover:gap-3
                      transition-all
                    "
                  >
                    Read more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* ================================
                BOTTOM BAR
            ================================= */}

            <div
              className="
                min-h-[66px]
                px-8
                py-3
                bg-[#F4F7FB]
                border-t
                border-[#E0E7F0]
                flex
                items-center
                justify-between
                gap-5
              "
            >
              <p
                className="
                  text-[12px]
                  text-[#8493AA]
                  font-medium
                "
              >
                Trusted by 1,200+ organisations in 70+
                countries
              </p>

              <Link
                to="#"
                className="
                  h-[38px]
                  px-5
                  rounded-[10px]
                  bg-[#10213D]
                  text-white
                  flex
                  items-center
                  gap-1
                  text-[12px]
                  font-bold
                  hover:bg-[#172E52]
                  transition-colors
                  whitespace-nowrap
                "
              >
                Explore Enterprise
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;