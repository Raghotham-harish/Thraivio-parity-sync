import { Link } from "react-router-dom";
import { LegalPage, type LegalSection } from "./LegalPage";
import { CONTACT_EMAIL } from "@/constants/contact";

const sections: LegalSection[] = [
  {
    id: "service",
    title: "What Thraivio is",
    body: <p>Thraivio is a marketplace that connects people ("users") with independent coaches and mentors ("members"). Members are not employees of Thraivio. Each member is responsible for the sessions, programs and events they offer.</p>,
  },
  {
    id: "accounts",
    title: "Your account",
    body: (
      <ul>
        <li>You must be at least 18 and give accurate information.</li>
        <li>Keep your password safe. You are responsible for activity on your account.</li>
        <li>Tell us straight away if you think your account has been misused.</li>
      </ul>
    ),
  },
  {
    id: "members",
    title: "Coaches and mentors",
    body: (
      <ul>
        <li>Your profile, credentials and experience must be truthful. We may review, verify, refuse or remove profiles.</li>
        <li>You set your own prices and availability, and deliver what you advertise.</li>
        <li>You keep client information confidential and follow our code of conduct.</li>
        <li>Thraivio deducts its commission and applicable taxes from amounts you collect through the platform, as shown in your earnings dashboard.</li>
      </ul>
    ),
  },
  {
    id: "payments",
    title: "Bookings, payments and refunds",
    body: (
      <>
        <p>Prices, the Thraivio platform fee and taxes are shown before you pay. Payments are processed by our payment partner.</p>
        <p>Cancellations and refunds follow the policy shown when you book. <strong>The platform fee is not refundable</strong>, except where the law requires otherwise.</p>
      </>
    ),
  },
  {
    id: "conduct",
    title: "Acceptable use",
    body: (
      <ul>
        <li>No harassment, discrimination, or illegal, harmful or misleading content.</li>
        <li>Don't take bookings or payments for people you met on Thraivio off the platform to avoid fees.</li>
        <li>Don't try to break, overload, scrape or get unauthorised access to the service.</li>
      </ul>
    ),
  },
  {
    id: "advice",
    title: "Not medical, legal or financial advice",
    body: <p>Coaching and mentoring are not therapy, medical treatment, or legal or financial advice. If you need those, consult a qualified professional. In an emergency, contact local emergency services.</p>,
  },
  {
    id: "content",
    title: "Content and intellectual property",
    body: <p>You keep ownership of what you post. You give Thraivio permission to host and display it to run the service. Members own their program and event materials. The Thraivio name, logo and platform belong to us.</p>,
  },
  {
    id: "liability",
    title: "Liability",
    body: <p>We work hard to keep Thraivio available and accurate, but provide it "as is". To the extent the law allows, Thraivio is not liable for indirect or consequential losses, or for the conduct of users or members, and our total liability to you is limited to the fees you paid us in the 12 months before the claim.</p>,
  },
  {
    id: "termination",
    title: "Suspension and closing your account",
    body: <p>You can close your account at any time. We may suspend or close accounts that break these Terms or put others at risk, and will tell you why unless the law prevents it.</p>,
  },
  {
    id: "law",
    title: "Governing law, changes and contact",
    body: (
      <>
        <p>These Terms are governed by the laws of India. We may update them; we will post changes here and email you about significant ones.</p>
        <p>See our <Link to="/privacy" className="font-semibold text-primary underline">Privacy Policy</Link> for how we handle personal data. Questions: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline">{CONTACT_EMAIL}</a>.</p>
      </>
    ),
  },
];

const TermsPage = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms of Service"
    updated="8 October 2026"
    intro={<p>These Terms are an agreement between you and Thraivio. By creating an account or using Thraivio you agree to them.</p>}
    sections={sections}
  />
);

export default TermsPage;
