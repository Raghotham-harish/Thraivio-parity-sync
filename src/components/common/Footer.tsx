import { Link } from "react-router-dom";
import {
  ExternalLink,
  BadgeCheck,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import { ThraivioHorizontalDark } from "@/components/shared/ThraivioLogos";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 pt-[72px] pb-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-x-12 gap-y-12">

          {/* ================= BRAND ================= */}
          <div className="pr-8">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center mb-7" aria-label="Thraivio home">
              <ThraivioHorizontalDark width={142} height={46} />
            </Link>
            {/* Description */}
            <p className="text-[#9DA7B6] text-[13px] leading-[1.7] max-w-[300px]">
              Connecting people with world-class
              <br />
              coaches and mentors. Globally
              <br />
              credentialed. GDPR Compliant.
            </p>

            {/* Social / External Icons */}
            <div className="flex items-center gap-4 mt-7">
              {[1, 2, 3].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label="Social link"
                  className="
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-[#24344C]
                    flex
                    items-center
                    justify-center
                    text-[#AAB3C0]
                    hover:bg-[#30445F]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <ExternalLink size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= PLATFORM ================= */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#7D899B] mb-7">
              Platform
            </h4>

            <ul className="space-y-[22px]">
              <li>
                <Link
                  to="/"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Find a Coach or Mentor
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Programs & Events
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= FOR COMPANIES ================= */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#7D899B] mb-7">
              For Companies
            </h4>

            <ul className="space-y-[22px]">
              <li>
                <Link
                  to="/enterprise-coaching"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Enterprise Coaching
                </Link>
              </li>

              <li>
                <Link
                  to="/team-development"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Team Development
                </Link>
              </li>

              <li>
                <Link
                  to="/leadership-programs"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Leadership Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/request-demo"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#7D899B] mb-7">
              Resources
            </h4>

            <ul className="space-y-[22px]">
              <li>
                <Link
                  to="/blog"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Blog & Insights
                </Link>
              </li>

              <li>
                <Link
                  to="/standards"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Our Standards
                </Link>
              </li>

              <li>
                <Link
                  to="/success-stories"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#7D899B] mb-7">
              Company
            </h4>

            <ul className="space-y-[22px]">
              <li>
                <Link
                  to="/about"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  About Thraivio
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-[13px] text-[#AAB3C0] hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="border-t border-[#22324A] mt-14">
          <div
            className="
            py-[27px]
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-7
          "
          >
            {/* Copyright */}
            <p className="text-[12px] text-[#60718A]">
              © 2026 Thraivio. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              {/* Credentialed Professionals */}
              <div className="flex items-center gap-2.5 text-[#60718A]">
                <BadgeCheck
                  size={22}
                  strokeWidth={2.2}
                  className="text-[#00DDB0]"
                />
                <span className="text-[12px]">
                  Credentialed Professionals
                </span>
              </div>

              {/* SOC 2 */}
              <div className="flex items-center gap-2.5 text-[#60718A]">
                <ShieldCheck
                  size={21}
                  strokeWidth={2.2}
                  className="text-[#00DDB0]"
                />
                <span className="text-[12px]">
                  SOC 2 Type II
                </span>
              </div>

              {/* GDPR */}
              <div className="flex items-center gap-2.5 text-[#60718A]">
                <LockKeyhole
                  size={21}
                  strokeWidth={2.2}
                  className="text-[#00DDB0]"
                />
                <span className="text-[12px]">
                  GDPR Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;