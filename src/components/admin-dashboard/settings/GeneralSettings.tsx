import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import type {
  GeneralSettings as GeneralSettingsType,
} from "@/types/admin-settings";

interface GeneralSettingsProps {
  settings: GeneralSettingsType;

  onChange: (
    settings: GeneralSettingsType
  ) => void;
}

export default function GeneralSettings({
  settings,
  onChange,
}: GeneralSettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          General Settings
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
            Platform Description
          </Label>

          <Textarea
            rows={5}
            value={
              settings.platformDescription
            }
            onChange={(e) =>
              onChange({
                ...settings,
                platformDescription:
                  e.target.value,
              })
            }
          />

        </div>
                <div className="grid gap-6 md:grid-cols-3">

          <div className="space-y-2">

            <Label>
              Language
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
              Currency
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
              </CardContent>

    </Card>
  );
}