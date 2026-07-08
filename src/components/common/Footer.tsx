import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div
                className="
h-12
w-12
rounded-xl
bg-gradient-to-br
from-blue-600
to-cyan-500
flex
items-center
justify-center
font-bold
text-xl
shadow-lg
shadow-blue-400/20
"
              >
                CC
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  CoachCoaching
                </h3>

                <p className="text-slate-400 text-sm">
                  Learn • Connect • Grow
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-md">
              Discover experienced mentors, coaches,
              consultants and industry experts. Compare
              profiles, explore programs, read reviews,
              view testimonials and book one-on-one
              mentoring sessions.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} />
                <span>support@coachcoaching.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} />
                <span>Global Mentor Marketplace</span>
              </div>

            </div>

          </div>

          {/* Platform */}
          <div>

            <h4 className="font-semibold text-lg text-white tracking-wide mb-5">
              Platform
            </h4>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300
"
                >
                  Find Mentors
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/become-mentor"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Become Mentor
                </Link>
              </li>

            </ul>

          </div>

          {/* For Mentors */}
          <div>

            <h4 className="font-semibold text-lg text-white tracking-wide mb-5">
              For Mentors
            </h4>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/signup"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Create Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/become-mentor"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Become Mentor
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Mentor Directory
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Contact Support
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h4 className="font-semibold text-lg text-white tracking-wide mb-5">
              Resources
            </h4>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/faq"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            py-6
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-slate-400 text-sm">
            © 2026 CoachCoaching. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy"
              className="text-slate-400 hover:text-cyan-400 transition duration-300"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-slate-400 hover:text-cyan-400 transition duration-300"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-slate-400 hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="
h-10
w-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-gradient-to-r
hover:from-blue-600
hover:to-cyan-500
transition-all
duration-300
hover:scale-110
"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="
h-10
w-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-gradient-to-r
hover:from-blue-600
hover:to-cyan-500
transition-all
duration-300
hover:scale-110
"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
h-10
w-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-gradient-to-r
hover:from-blue-600
hover:to-cyan-500
transition-all
duration-300
hover:scale-110
"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="
h-10
w-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-gradient-to-r
hover:from-blue-600
hover:to-cyan-500
transition-all
duration-300
hover:scale-110
"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;