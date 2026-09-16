import { Button } from "@/components/ui/button";

interface SettingsTabsProps {
  activeTab: string;

  onTabChange: (
    tab: string
  ) => void;
}

const tabs = [
  "General",
  "Platform",
  "Security",
  "Email",
  "Notifications",
  "Payments",
  "Storage",
  "Integrations",
  "Branding",
  "Maintenance",
];

export default function SettingsTabs({
  activeTab,
  onTabChange,
}: SettingsTabsProps) {
  return (
    <section className="overflow-x-auto rounded-2xl border bg-background p-4 shadow-sm">

      <div className="flex min-w-max gap-3">

        {tabs.map((tab) => (

          <Button
            key={tab}
            variant={
              activeTab === tab
                ? "default"
                : "outline"
            }
            className="rounded-xl whitespace-nowrap"
            onClick={() =>
              onTabChange(tab)
            }
          >
            {tab}
          </Button>

        ))}
              </div>

      <div className="mt-5 rounded-2xl border border-dashed bg-muted/20 px-4 py-3">

        <p className="text-sm text-muted-foreground">

          Configure platform settings by selecting
          a category above. Each section is
          independent and can be connected to
          backend APIs or Firebase later without
          changing the UI.

        </p>

      </div>
          </section>
  );
}