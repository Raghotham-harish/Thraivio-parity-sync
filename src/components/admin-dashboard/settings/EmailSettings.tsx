import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import type {
  EmailSettings as EmailSettingsType,
} from "@/types/admin-settings";

interface EmailSettingsProps {
  settings: EmailSettingsType;

  onChange: (
    settings: EmailSettingsType
  ) => void;
}

export default function EmailSettings({
  settings,
  onChange,
}: EmailSettingsProps) {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Email / SMTP Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              SMTP Host
            </Label>

            <Input
              value={settings.smtpHost}
              onChange={(e) =>
                onChange({
                  ...settings,
                  smtpHost:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              SMTP Port
            </Label>

            <Input
              type="number"
              value={settings.smtpPort}
              onChange={(e) =>
                onChange({
                  ...settings,
                  smtpPort: Number(
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
              SMTP Username
            </Label>

            <Input
              value={settings.smtpUsername}
              onChange={(e) =>
                onChange({
                  ...settings,
                  smtpUsername:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              SMTP Password
            </Label>

            <Input
              type="password"
              value={settings.smtpPassword}
              onChange={(e) =>
                onChange({
                  ...settings,
                  smtpPassword:
                    e.target.value,
                })
              }
            />

          </div>

        </div>
                <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Sender Name
            </Label>

            <Input
              value={settings.senderName}
              onChange={(e) =>
                onChange({
                  ...settings,
                  senderName:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Sender Email
            </Label>

            <Input
              type="email"
              value={settings.senderEmail}
              onChange={(e) =>
                onChange({
                  ...settings,
                  senderEmail:
                    e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Configure SMTP credentials for
            transactional emails, password
            resets, notifications and system
            messages. Backend integration will
            securely store encrypted credentials.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}