import { useNavigate } from "react-router-dom";
import { Compass, Home } from "lucide-react";
import { EmptyState } from "@/components/shared/EmptyState";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-16">
      <EmptyState
        icon={Compass}
        size="lg"
        title="We couldn't find that page"
        description="The link may be old or mistyped. Head back home or browse coaches and mentors."
        action={{ label: "Go to home", icon: Home, onClick: () => navigate("/") }}
        secondaryAction={{ label: "Find a coach", onClick: () => navigate("/mentors") }}
      />
    </section>
  );
};

export default NotFoundPage;
