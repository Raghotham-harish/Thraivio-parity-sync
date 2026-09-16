import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import { Textarea } from "@/components/ui/textarea";

import type {
  MaintenanceSettings as MaintenanceSettingsType,
} from "@/types/admin-settings";

interface MaintenanceSettingsProps {
  settings: MaintenanceSettingsType;

  onChange: (
    settings: MaintenanceSettingsType
  ) => void;
}

export default function MaintenanceSettings({
  settings,
  onChange,
}: MaintenanceSettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Maintenance Mode
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Enable Maintenance Mode
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Temporarily disable public access
              while administrators perform
              updates, deployments or scheduled
              maintenance.
            </p>

          </div>

          <Switch
            checked={settings.maintenanceMode}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                maintenanceMode: checked,
              })
            }
          />

        </div>

        <div className="space-y-2">

          <Label>
            Maintenance Message
          </Label>

          <Textarea
            rows={5}
            value={settings.maintenanceMessage}
            onChange={(e) =>
              onChange({
                ...settings,
                maintenanceMessage:
                  e.target.value,
              })
            }
          />

        </div>
                <div className="rounded-2xl border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 p-5">

          <h3 className="font-semibold text-[#B45309] dark:text-[#F59E0B]">

            Maintenance Notice

          </h3>

          <div className="mt-3 space-y-2 text-sm text-muted-foreground">

            <p>

              • When enabled, the platform will
              become inaccessible to regular
              users.

            </p>

            <p>

              • Super Admins can continue to
              access the dashboard during
              maintenance.

            </p>

            <p>

              • Displayed message will appear on
              the public maintenance page.

            </p>

            <p>

              • Backend integration can schedule
              maintenance automatically and send
              notifications before activation.

            </p>

          </div>

        </div>
        </CardContent>
    </Card>
  );
}