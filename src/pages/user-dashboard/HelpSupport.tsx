import { useState } from "react";

import HelpHeader from "@/components/user-dashboard/help/HelpHeader";
import HelpStats from "@/components/user-dashboard/help/HelpStats";
import SupportOptions from "@/components/user-dashboard/help/SupportOptions";
import FAQSection from "@/components/user-dashboard/help/FAQSection";
import TicketHistory from "@/components/user-dashboard/help/TicketHistory";
import ContactSupport from "@/components/user-dashboard/help/ContactSupport";
import ResourcesCard from "@/components/user-dashboard/help/ResourcesCard";
import FeedbackCard from "@/components/user-dashboard/help/FeedbackCard";

const HelpSupport = () => {
  const [tickets] = useState([
    {
      id: "1",
      subject: "Unable to join mentorship session",
      category: "Sessions",
      priority: "High" as const,
      status: "Open" as const,
      createdAt: "24 Jun 2026",
      updatedAt: "Today",
    },
    {
      id: "2",
      subject: "Certificate not generated",
      category: "Certificates",
      priority: "Medium" as const,
      status: "Resolved" as const,
      createdAt: "18 Jun 2026",
      updatedAt: "20 Jun 2026",
    },
    {
      id: "3",
      subject: "Payment verification pending",
      category: "Payments",
      priority: "Low" as const,
      status: "In Progress" as const,
      createdAt: "22 Jun 2026",
      updatedAt: "Yesterday",
    },
  ]);

  const handleCreateTicket = () => {
    console.log("Create Ticket");
  };

  const handleLiveChat = () => {
    console.log("Live Chat");
  };

  const handleEmailSupport = () => {
    console.log("Email Support");
  };

  const handleCallSupport = () => {
    console.log("Call Support");
  };

  const handleKnowledgeBase = () => {
    console.log("Knowledge Base");
  };

  const handleVideoGuides = () => {
    console.log("Video Guides");
  };

  const handleOpenDocs = () => {
    console.log("Docs");
  };

  const handleOpenTutorials = () => {
    console.log("Tutorials");
  };

  const handleOpenFAQ = () => {
    console.log("FAQ");
  };

  const handleGettingStarted = () => {
    console.log("Getting Started");
  };

  const handleViewTicket = (id: string) => {
    console.log("View", id);
  };

  const handleReplyTicket = (id: string) => {
    console.log("Reply", id);
  };

  const handleFeedback = (
    rating: number,
    feedback: string
  ) => {
    console.log(rating, feedback);
  };

  return (
    <div className="space-y-8">

      <HelpHeader
        openTickets={2}
        resolvedTickets={18}
        activeSection="Help Center"
      />

      <HelpStats
        openTickets={2}
        resolvedTickets={18}
        averageResponse="15 min"
        knowledgeBaseArticles={250}
      />

      <SupportOptions
        onLiveChat={handleLiveChat}
        onEmailSupport={handleEmailSupport}
        onCallSupport={handleCallSupport}
        onCreateTicket={handleCreateTicket}
        onKnowledgeBase={handleKnowledgeBase}
        onVideoGuides={handleVideoGuides}
      />

      <FAQSection />

      <TicketHistory
        tickets={tickets}
        onView={handleViewTicket}
        onReply={handleReplyTicket}
      />

      <ContactSupport />

      <ResourcesCard
        onOpenDocs={handleOpenDocs}
        onOpenTutorials={handleOpenTutorials}
        onOpenFAQ={handleOpenFAQ}
        onGettingStarted={handleGettingStarted}
      />

      <FeedbackCard
        onSubmit={handleFeedback}
      />

    </div>
  );
};

export default HelpSupport;