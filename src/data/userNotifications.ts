import { mentors } from "@/data/mentors";

import type { UserNotification } from "@/types/notification";

export const userNotifications: UserNotification[] =
  mentors.slice(0, 6).flatMap((mentor, index) => [
    {
      id: `${mentor.id}-session`,

      title: "Upcoming Mentorship Session",

      message: `Your ${mentor.sessionDuration?.mentorshipCall ?? "60 Min"} mentorship session with ${mentor.name} is scheduled soon.`,

      type: "session",

      status: index % 2 === 0 ? "unread" : "read",

      createdAt: "2 hours ago",

      actionLabel: "Join Session",

      actionLink: "/user-dashboard/sessions",

      image: mentor.image,

      mentorName: mentor.name,
    },

    {
      id: `${mentor.id}-program`,

      title: "New Program Available",

      message: `${mentor.name} has published a new learning program for ${mentor.category}.`,

      type: "program",

      status: "unread",

      createdAt: "Yesterday",

      actionLabel: "View Program",

      actionLink: "/user-dashboard/programs",

      image: mentor.image,

      mentorName: mentor.name,
    },

    {
      id: `${mentor.id}-event`,

      title: "Upcoming Live Event",

      message: `${mentor.name} is hosting an exclusive live event this week.`,

      type: "event",

      status: index % 3 === 0 ? "unread" : "read",

      createdAt: "3 days ago",

      actionLabel: "View Event",

      actionLink: "/user-dashboard/events",

      image: mentor.image,

      mentorName: mentor.name,
    },

    {
      id: `${mentor.id}-payment`,

      title: "Payment Successful",

      message: `Payment for your mentorship session with ${mentor.name} has been successfully completed.`,

      type: "payment",

      status: "read",

      createdAt: "5 days ago",

      actionLabel: "View Payment",

      actionLink: "/user-dashboard/payments",

      image: mentor.image,

      mentorName: mentor.name,
    },

    {
      id: `${mentor.id}-certificate`,

      title: "Certificate Available",

      message: `Congratulations! Your mentorship completion certificate is now available.`,

      type: "certificate",

      status: index % 2 === 0 ? "unread" : "read",

      createdAt: "1 week ago",

      actionLabel: "Download Certificate",

      actionLink: "/user-dashboard/certificates",

      image: mentor.image,

      mentorName: mentor.name,
    },

    {
      id: `${mentor.id}-mentor`,

      title: "Mentor Profile Updated",

      message: `${mentor.name} has updated skills, availability and pricing.`,

      type: "mentor",

      status: "read",

      createdAt: "2 weeks ago",

      actionLabel: "View Mentor",

      actionLink: `/mentor/${mentor.id}`,

      image: mentor.image,

      mentorName: mentor.name,
    },
  ]);