import { LegalPage, type LegalSection } from "./LegalPage";
import { CONTACT_EMAIL } from "@/constants/contact";

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline">{CONTACT_EMAIL}</a>;

const sections: LegalSection[] = [
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <p><strong>Account details:</strong> your name, email address, password (stored only in hashed form), role (user or coach/mentor) and, if you add them, phone number and profile photo.</p>
        <p><strong>Coach and mentor profiles:</strong> headline, experience, expertise, credentials, pricing, availability and anything else you choose to publish on your public profile.</p>
        <p><strong>Activity on Thraivio:</strong> bookings, sessions, programs and events you join, messages, reviews, journal entries and survey responses.</p>
        <p><strong>Payments:</strong> amounts, dates and status of payments. Card and bank details are handled by our payment partner and are not stored by us.</p>
        <p><strong>Technical data:</strong> device and browser information, IP address and basic usage logs needed to run and secure the service.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <ul>
        <li>To create and run your account and show coach profiles to people looking for a match.</li>
        <li>To arrange bookings, sessions, programs and events, and send related emails such as confirmations and password resets.</li>
        <li>To process payments and pay coaches and mentors.</li>
        <li>To keep Thraivio safe: preventing fraud and abuse, and enforcing our Terms.</li>
        <li>To improve the service, using aggregated information wherever possible.</li>
      </ul>
    ),
  },
  {
    id: "share",
    title: "When we share it",
    body: (
      <>
        <p>We do not sell your personal data.</p>
        <ul>
          <li><strong>With your coach or mentor</strong> (and vice versa): the details needed to run a booking, such as your name and session information.</li>
          <li><strong>With service providers</strong> that host our systems, send email, store images and process payments, only to provide those services to us.</li>
          <li><strong>With your organisation</strong> if you joined Thraivio through your employer: participation and progress information as agreed with them, never the content of your sessions.</li>
          <li><strong>When required by law</strong> or to protect the rights and safety of our users.</li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "Cookies and browser storage",
    body: <p>We keep you signed in using a secure cookie and a token stored in your browser. We do not use advertising cookies.</p>,
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: <p>We keep your information while your account is active. If you delete your account we delete or anonymise your personal data, except records we must keep for legal, tax or accounting reasons.</p>,
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Under India's Digital Personal Data Protection Act, 2023 and other applicable laws, you can ask to access, correct or delete your personal data, withdraw consent, and nominate someone to exercise these rights on your behalf.</p>
        <p>Most details can be updated from your profile settings. For anything else, email <Mail />.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: <p>We use encryption in transit, hashed passwords and access controls to protect your data. No system is perfectly secure; if we become aware of a breach affecting you, we will notify you and the authorities as the law requires.</p>,
  },
  {
    id: "children",
    title: "Children",
    body: <p>Thraivio is for people aged 18 and over. We do not knowingly collect data from children.</p>,
  },
  {
    id: "changes",
    title: "Changes and contact",
    body: <p>We will post any changes on this page and update the date above; for significant changes we will also email you. Questions or complaints: <Mail />.</p>,
  },
];

const PrivacyPage = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    updated="8 October 2026"
    intro={<p>This policy explains what personal information Thraivio collects, why, and the choices you have. It applies to thraivio.com and the Thraivio dashboards.</p>}
    sections={sections}
  />
);

export default PrivacyPage;
