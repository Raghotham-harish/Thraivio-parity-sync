export type CompanyPlan = "starter" | "growth" | "enterprise";

export type CompanyStatus = "active" | "pending" | "suspended";

export interface Company {
  id: string;

  name: string;

  logoUrl: string;

  industry: string;

  plan: CompanyPlan;

  status: CompanyStatus;

  seatsPurchased: number;

  seatsUsed: number;

  billingContactName: string;

  billingContactEmail: string;

  /** White-label brand color override, applied only within this company's own preview - not a live subdomain/tenant deploy. */
  brandColor?: string;

  createdAt: string;
}

export interface CompanyEmployee {
  id: string;

  companyId: string;

  name: string;

  email: string;

  avatar: string;

  role: "company-admin" | "employee";

  status: "active" | "invited";

  programsEnrolled: number;
}
