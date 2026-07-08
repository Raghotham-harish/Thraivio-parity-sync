import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import type {
  IntegrationSettings as IntegrationSettingsType,
} from "@/types/admin-settings";

interface IntegrationSettingsProps {
  settings: IntegrationSettingsType;

  onChange: (
    settings: IntegrationSettingsType
  ) => void;
}

export default function IntegrationSettings({
  settings,
  onChange,
}: IntegrationSettingsProps) {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Third-Party Integrations
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Firebase Integration
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Enable Firebase services for
              authentication, storage and
              realtime features.
            </p>

          </div>

          <Switch
            checked={settings.firebaseEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                firebaseEnabled: checked,
              })
            }
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Google OAuth
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Allow users to sign in using
              their Google account.
            </p>

          </div>

          <Switch
            checked={settings.googleOAuthEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                googleOAuthEnabled: checked,
              })
            }
          />

        </div>
                <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              GitHub OAuth
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Allow users and mentors to
              authenticate using their
              GitHub account.
            </p>

          </div>

          <Switch
            checked={settings.githubOAuthEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                githubOAuthEnabled: checked,
              })
            }
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Calendly Integration
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Synchronize mentor availability
              and booking schedules with
              Calendly.
            </p>

          </div>

          <Switch
            checked={settings.calendlyEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                calendlyEnabled: checked,
              })
            }
          />

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Third-party integrations can be
            securely connected using API keys,
            OAuth credentials and environment
            variables without changing the UI.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}