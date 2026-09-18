import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import paymentIllustration from "@/assets/illustrations/payment.svg";

interface EmptyPricingProps {
  onAddPricing: () => void;
}

const EmptyPricing = ({ onAddPricing }: EmptyPricingProps) => {
  return (
    <EmptyState
      illustration={paymentIllustration}
      title="No Pricing Plans Found"
      description="Create coaching plans and mentorship packages for your future mentees."
      action={{
        label: "Add Pricing Plan",
        onClick: onAddPricing,
        icon: Plus,
      }}
    />
  );
};

export default EmptyPricing;
