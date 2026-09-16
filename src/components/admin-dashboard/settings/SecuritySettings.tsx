import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import type {
  SecuritySettings as SecuritySettingsType,
} from "@/types/admin-settings";

interface SecuritySettingsProps {
  settings: SecuritySettingsType;

  onChange: (
    settings: SecuritySettingsType
  ) => void;
}

export default function SecuritySettings({
  settings,
  onChange,
}: SecuritySettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Security Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Enable Two-Factor Authentication
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Require administrators to verify
              login using two-factor authentication.
            </p>

          </div>

          <Switch
            checked={settings.enableTwoFactor}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                enableTwoFactor: checked,
              })
            }
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Minimum Password Length
            </Label>

            <Input
              type="number"
              value={settings.passwordMinLength}
              onChange={(e) =>
                onChange({
                  ...settings,
                  passwordMinLength: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Maximum Login Attempts
            </Label>

            <Input
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) =>
                onChange({
                  ...settings,
                  maxLoginAttempts: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

        </div>
                <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Session Timeout (Minutes)
            </Label>

            <Input
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) =>
                onChange({
                  ...settings,
                  sessionTimeout: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

          <div className="flex items-center justify-between rounded-2xl border p-5">

            <div>

              <Label>
                Require Special Character
              </Label>

              <p className="mt-1 text-sm text-muted-foreground">
                Enforce strong passwords by
                requiring at least one special
                character.
              </p>

            </div>

            <Switch
              checked={settings.requireSpecialCharacter}
              onCheckedChange={(checked) =>
                onChange({
                  ...settings,
                  requireSpecialCharacter: checked,
                })
              }
            />

          </div>

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Security policies configured here
            will apply globally after backend
            integration. All values are ready
            for API or Firebase persistence.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}