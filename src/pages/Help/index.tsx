import { Link } from "react-router-dom";
import { BookOpen, CalendarCheck, CreditCard, Mail, MessageCircleQuestion, UserCog } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { CONTACT_EMAIL } from "@/constants/contact";
import { getAuthUser, dashboardPathFor } from "@/lib/auth";

const topics = [
  { icon: UserCog, title: "Account & sign-in", desc: "Forgot your password? Reset it from the sign-in page.", to: "/forgot-password", cta: "Reset password" },
  { icon: CalendarCheck, title: "Bookings & sessions", desc: "See, join or reschedule your sessions from your dashboard.", to: "/user-dashboard/sessions", cta: "My sessions" },
  { icon: CreditCard, title: "Payments & refunds", desc: "Your receipts and payment history are in your dashboard.", to: "/user-dashboard/payments", cta: "My payments" },
  { icon: BookOpen, title: "How Thraivio works", desc: "Matching, intro calls, switching coaches and more.", to: "/how-it-works#faq", cta: "Read FAQs" },
];

const HelpPage = () => {
  const user = getAuthUser();

  return (
    <div>
      <PageHero eyebrow="Help & Contact" title="How can we help?">
        Find quick answers below, or write to us and a real person will reply.
      </PageHero>

      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {topics.map(({ icon: Icon, title, desc, to, cta }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="icon-bg mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                <Icon size={22} />
              </div>
              <h2 className="mb-1.5 text-base font-bold text-foreground">{title}</h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground font-body">{desc}</p>
              <Link to={to} className="text-[13px] font-bold text-primary hover:underline">{cta} →</Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="icon-bg-mint flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#065F46]">
              <MessageCircleQuestion size={24} />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-xl font-medium text-foreground">Still need help?</h2>
              <p className="mt-1 text-sm text-muted-foreground font-body">
                {user
                  ? "Raise a support ticket from your dashboard so we can see your account details, or email us."
                  : "Email us with your question. If it's about a booking, include the email you signed up with."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {user && (
                <Link
                  to={user.role === "user" ? "/user-dashboard/help-support" : dashboardPathFor(user.role)}
                  className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90"
                >
                  Open a ticket
                </Link>
              )}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-foreground hover:border-primary hover:text-primary"
              >
                <Mail size={16} /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
