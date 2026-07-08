import {
  Settings2,
  Download,
  Save,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

interface SettingsHeaderProps {
  environment: string;

  lastUpdated: string;

  onSave: () => void;

  onExport: () => void;
}

export default function SettingsHeader({
  environment,
  lastUpdated,
  onSave,
  onExport,
}: SettingsHeaderProps) {
  return (
    <section className="rounded-3xl border bg-background p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-4">

          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1"
          >
            Platform Settings
          </Badge>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              System Configuration
            </h1>

            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Configure platform preferences,
              integrations, branding, security
              and all global application
              settings from one place.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">

              <Settings2 className="h-4 w-4 text-primary" />

              <span>
                {environment}
              </span>

            </div>

            <div className="rounded-full border px-4 py-2 text-sm font-semibold">

              Updated {lastUpdated}

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onExport}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Settings
          </Button>

          <Button
            className="rounded-xl"
            onClick={onSave}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>

        </div>

      </div>
    </section>
  );
}