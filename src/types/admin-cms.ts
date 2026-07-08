export type CMSStatus =
  | "draft"
  | "published"
  | "archived";

export type CMSCategory =
  | "home"
  | "about"
  | "blog"
  | "faq"
  | "privacy"
  | "terms"
  | "contact";

export interface AdminCMSPage {
  id: string;

  pageId: string;

  title: string;

  slug: string;

  category: CMSCategory;

  status: CMSStatus;

  author: {
    id: string;

    name: string;

    avatar: string;
  };

  description: string;

  seoTitle: string;

  seoDescription: string;

  views: number;

  updatedAt: string;

  publishedAt: string;

  createdAt: string;
}

export interface CMSStats {
  totalPages: number;

  publishedPages: number;

  draftPages: number;

  archivedPages: number;

  totalViews: number;

  monthlyViews: number;

  seoOptimizedPages: number;

  recentlyUpdated: number;
}
export interface CMSFilters {
  search: string;

  status: CMSStatus | "all";

  category: CMSCategory | "all";

  author: string | "all";

  sortBy:
    | "newest"
    | "oldest"
    | "updated"
    | "views"
    | "title";
}

export interface CMSTableColumn {
  id:
    | "title"
    | "category"
    | "author"
    | "status"
    | "views"
    | "updatedAt"
    | "actions";

  label: string;

  sortable: boolean;
}