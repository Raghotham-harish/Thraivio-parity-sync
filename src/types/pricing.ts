export interface PricingPlan {
  id?: string;

  title: string;

  price: number;

  duration: string;

  description: string;

  popular?: boolean;
}