import type {
  AdminCMSPage,
  CMSStats,
} from "@/types/admin-cms";

export const cmsStats: CMSStats = {
  totalPages: 86,

  publishedPages: 58,

  draftPages: 19,

  archivedPages: 9,

  totalViews: 1248650,

  monthlyViews: 184320,

  seoOptimizedPages: 67,

  recentlyUpdated: 12,
};

export const cmsPages: AdminCMSPage[] = [
  {
    id: "1",

    pageId: "CMS-100001",

    title: "Home Page",

    slug: "/",

    category: "home",

    status: "published",

    description:
      "Main landing page with hero banner, featured mentors, testimonials and CTA sections.",

    seoTitle:
      "CoachCoaching | Learn From Industry Experts",

    seoDescription:
      "Join CoachCoaching to learn from experienced mentors through live sessions, programs and events.",

    views: 425680,

    updatedAt: "08 Jul 2026",

    publishedAt: "15 Jan 2026",

    createdAt: "10 Jan 2026",

    author: {
      id: "ADM-001",

      name: "Content Team",

      avatar: "https://i.pravatar.cc/150?img=12",
    },
  },

  {
    id: "2",

    pageId: "CMS-100002",

    title: "About Us",

    slug: "/about",

    category: "about",

    status: "published",

    description:
      "Company overview, mission, vision and platform journey.",

    seoTitle:
      "About CoachCoaching",

    seoDescription:
      "Know more about CoachCoaching, our mission and our community of mentors.",

    views: 82640,

    updatedAt: "05 Jul 2026",

    publishedAt: "18 Jan 2026",

    createdAt: "12 Jan 2026",

    author: {
      id: "ADM-002",

      name: "Marketing Team",

      avatar: "https://i.pravatar.cc/150?img=32",
    },
  },
    {
    id: "3",

    pageId: "CMS-100003",

    title: "Blog Listing",

    slug: "/blogs",

    category: "blog",

    status: "draft",

    description:
      "Central blog listing page for articles, tutorials and platform news.",

    seoTitle:
      "CoachCoaching Blog",

    seoDescription:
      "Read the latest articles, career guidance and technology insights from industry experts.",

    views: 18240,

    updatedAt: "09 Jul 2026",

    publishedAt: "",

    createdAt: "02 Jul 2026",

    author: {
      id: "ADM-003",

      name: "Editorial Team",

      avatar: "https://i.pravatar.cc/150?img=18",
    },
  },

  {
    id: "4",

    pageId: "CMS-100004",

    title: "Frequently Asked Questions",

    slug: "/faq",

    category: "faq",

    status: "published",

    description:
      "Frequently asked questions about mentors, sessions, payments and certificates.",

    seoTitle:
      "CoachCoaching FAQ",

    seoDescription:
      "Find answers to common questions about using the CoachCoaching platform.",

    views: 95420,

    updatedAt: "07 Jul 2026",

    publishedAt: "25 Jan 2026",

    createdAt: "20 Jan 2026",

    author: {
      id: "ADM-004",

      name: "Support Team",

      avatar: "https://i.pravatar.cc/150?img=44",
    },
  },
    {
    id: "5",

    pageId: "CMS-100005",

    title: "Privacy Policy",

    slug: "/privacy-policy",

    category: "privacy",

    status: "published",

    description:
      "Privacy policy explaining how user data is collected, stored and protected.",

    seoTitle:
      "Privacy Policy | CoachCoaching",

    seoDescription:
      "Read the CoachCoaching privacy policy and understand how we handle your information securely.",

    views: 36480,

    updatedAt: "06 Jul 2026",

    publishedAt: "30 Jan 2026",

    createdAt: "28 Jan 2026",

    author: {
      id: "ADM-005",

      name: "Legal Team",

      avatar: "https://i.pravatar.cc/150?img=25",
    },
  },

  {
    id: "6",

    pageId: "CMS-100006",

    title: "Terms & Conditions",

    slug: "/terms-and-conditions",

    category: "terms",

    status: "archived",

    description:
      "Archived version of platform terms and conditions kept for historical reference.",

    seoTitle:
      "Terms & Conditions | CoachCoaching",

    seoDescription:
      "Review the terms and conditions governing the use of the CoachCoaching platform.",

    views: 22815,

    updatedAt: "03 Jul 2026",

    publishedAt: "15 Feb 2026",

    createdAt: "10 Feb 2026",

    author: {
      id: "ADM-006",

      name: "Compliance Team",

      avatar: "https://i.pravatar.cc/150?img=56",
    },
  },
  ];

export const cmsStatuses = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Published",
    value: "published",
  },
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Archived",
    value: "archived",
  },
] as const;

export const cmsCategories = [
  {
    label: "All Categories",
    value: "all",
  },
  {
    label: "Home",
    value: "home",
  },
  {
    label: "About",
    value: "about",
  },
  {
    label: "Blog",
    value: "blog",
  },
  {
    label: "FAQ",
    value: "faq",
  },
  {
    label: "Privacy",
    value: "privacy",
  },
  {
    label: "Terms",
    value: "terms",
  },
  {
    label: "Contact",
    value: "contact",
  },
] as const;