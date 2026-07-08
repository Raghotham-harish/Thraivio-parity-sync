import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import type {
  BrandingSettings as BrandingSettingsType,
} from "@/types/admin-settings";

interface BrandingSettingsProps {
  settings: BrandingSettingsType;

  onChange: (
    settings: BrandingSettingsType
  ) => void;
}

export default function BrandingSettings({
  settings,
  onChange,
}: BrandingSettingsProps) {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Branding Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Logo URL
            </Label>

            <Input
              value={settings.logo}
              onChange={(e) =>
                onChange({
                  ...settings,
                  logo: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Favicon URL
            </Label>

            <Input
              value={settings.favicon}
              onChange={(e) =>
                onChange({
                  ...settings,
                  favicon: e.target.value,
                })
              }
            />

          </div>

        </div>
                <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Primary Color
            </Label>

            <Input
              type="color"
              value={settings.primaryColor}
              onChange={(e) =>
                onChange({
                  ...settings,
                  primaryColor:
                    e.target.value,
                })
              }
              className="h-11"
            />

          </div>

          <div className="space-y-2">

            <Label>
              Secondary Color
            </Label>

            <Input
              type="color"
              value={settings.secondaryColor}
              onChange={(e) =>
                onChange({
                  ...settings,
                  secondaryColor:
                    e.target.value,
                })
              }
              className="h-11"
            />

          </div>

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Upload your organization logo,
            favicon and customize theme colors.
            These branding preferences will be
            applied across the entire platform
            after backend integration.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}