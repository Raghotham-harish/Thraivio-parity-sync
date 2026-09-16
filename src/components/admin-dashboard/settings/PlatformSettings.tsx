import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import type {
  GeneralSettings,
} from "@/types/admin-settings";

interface PlatformSettingsProps {
  settings: GeneralSettings;

  onChange: (
    settings: GeneralSettings
  ) => void;
}

export default function PlatformSettings({
  settings,
  onChange,
}: PlatformSettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Platform Configuration
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Platform Name
            </Label>

            <Input
              value={settings.platformName}
              onChange={(e) =>
                onChange({
                  ...settings,
                  platformName:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Platform URL
            </Label>

            <Input
              value={settings.platformUrl}
              onChange={(e) =>
                onChange({
                  ...settings,
                  platformUrl:
                    e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="space-y-2">

          <Label>
            Default Language
          </Label>

          <Input
            value={settings.language}
            onChange={(e) =>
              onChange({
                ...settings,
                language:
                  e.target.value,
              })
            }
          />

        </div>
                <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Timezone
            </Label>

            <Input
              value={settings.timezone}
              onChange={(e) =>
                onChange({
                  ...settings,
                  timezone:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Default Currency
            </Label>

            <Input
              value={settings.currency}
              onChange={(e) =>
                onChange({
                  ...settings,
                  currency:
                    e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            These platform-level settings are
            shared across the entire application.
            Backend/API integration can later
            persist these values without changing
            the UI components.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}