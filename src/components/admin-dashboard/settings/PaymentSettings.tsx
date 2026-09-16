import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Switch } from "@/components/ui/switch";

import type {
  PaymentSettings as PaymentSettingsType,
} from "@/types/admin-settings";

interface PaymentSettingsProps {
  settings: PaymentSettingsType;

  onChange: (
    settings: PaymentSettingsType
  ) => void;
}

export default function PaymentSettings({
  settings,
  onChange,
}: PaymentSettingsProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Payment Gateway Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Enable Razorpay
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Allow payments through the
              Razorpay payment gateway.
            </p>

          </div>

          <Switch
            checked={settings.razorpayEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                razorpayEnabled: checked,
              })
            }
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Enable Stripe
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Accept international card
              payments using Stripe.
            </p>

          </div>

          <Switch
            checked={settings.stripeEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                stripeEnabled: checked,
              })
            }
          />

        </div>
                <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <Label>
              Enable PayPal
            </Label>

            <p className="mt-1 text-sm text-muted-foreground">
              Allow customers to complete
              payments using their PayPal
              accounts.
            </p>

          </div>

          <Switch
            checked={settings.paypalEnabled}
            onCheckedChange={(checked) =>
              onChange({
                ...settings,
                paypalEnabled: checked,
              })
            }
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Commission Rate (%)
            </Label>

            <Input
              type="number"
              value={settings.commissionRate}
              onChange={(e) =>
                onChange({
                  ...settings,
                  commissionRate: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Tax Rate (%)
            </Label>

            <Input
              type="number"
              value={settings.taxRate}
              onChange={(e) =>
                onChange({
                  ...settings,
                  taxRate: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

        </div>

        <div className="rounded-2xl border bg-muted/30 p-5">

          <p className="text-sm leading-6 text-muted-foreground">

            Payment gateway configurations
            will be securely synchronized with
            backend APIs and encrypted before
            being stored in production.

          </p>

        </div>
              </CardContent>

    </Card>
  );
}