import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import type {
  NotificationSettings as NotificationSettingsType,
} from "@/types/admin-settings";

interface NotificationSettingsProps {
  settings: NotificationSettingsType;

  onChange: (
    settings: NotificationSettingsType
  ) => void;
}

export default function NotificationSettings({
  settings,
  onChange,
}: NotificationSettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Notification Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Email Notifications
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Send important platform updates
              and transactional emails.
            </p>

          </div>

          <Switch
            checked={settings.emailNotifications}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                emailNotifications: checked,
              })
            }
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Push Notifications
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Deliver real-time browser and
              mobile push notifications.
            </p>

          </div>

          <Switch
            checked={settings.pushNotifications}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                pushNotifications: checked,
              })
            }
          />

        </div>
                <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              SMS Notifications
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Send important alerts and
              verification messages through SMS.
            </p>

          </div>

          <Switch
            checked={settings.smsNotifications}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                smsNotifications: checked,
              })
            }
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Administrator Alerts
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Notify administrators about
              security events, platform issues
              and critical system updates.
            </p>

          </div>

          <Switch
            checked={settings.adminAlerts}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                adminAlerts: checked,
              })
            }
          />

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Notification preferences will be
            synchronized with backend services,
            Firebase Cloud Messaging and email
            providers after integration.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}