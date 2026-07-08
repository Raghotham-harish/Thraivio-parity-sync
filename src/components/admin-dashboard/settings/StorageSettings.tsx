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
  StorageSettings as StorageSettingsType,
} from "@/types/admin-settings";

interface StorageSettingsProps {
  settings: StorageSettingsType;

  onChange: (
    settings: StorageSettingsType
  ) => void;
}

export default function StorageSettings({
  settings,
  onChange,
}: StorageSettingsProps) {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Storage Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="space-y-2">

          <Label>
            Storage Provider
          </Label>

          <Input
            value={settings.storageProvider}
            onChange={(e) =>
              onChange({
                ...settings,
                storageProvider:
                  e.target.value,
              })
            }
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Maximum Upload Size (MB)
            </Label>

            <Input
              type="number"
              value={settings.maxUploadSize}
              onChange={(e) =>
                onChange({
                  ...settings,
                  maxUploadSize: Number(
                    e.target.value
                  ),
                })
              }
            />

          </div>

          <div className="flex items-center justify-between rounded-2xl border p-5">

            <div>

              <Label>
                Enable Cloud Storage
              </Label>

              <p className="mt-1 text-sm text-muted-foreground">
                Store uploaded files using
                cloud storage providers instead
                of local storage.
              </p>

            </div>

            <Switch
              checked={
                settings.enableCloudStorage
              }
              onCheckedChange={(checked) =>
                onChange({
                  ...settings,
                  enableCloudStorage:
                    checked,
                })
              }
            />

          </div>

        </div>
                <div className="rounded-2xl border bg-muted/30 p-5">

          <h3 className="mb-3 font-semibold">
            Storage Information
          </h3>

          <div className="space-y-2 text-sm text-muted-foreground">

            <p>
              • Configure the default storage
              provider for uploaded files.
            </p>

            <p>
              • Maximum upload size applies to
              images, documents, certificates,
              videos and other media.
            </p>

            <p>
              • Cloud storage can be connected
              later using AWS S3, Google Cloud
              Storage, Firebase Storage or
              Cloudinary.
            </p>

            <p>
              • Backend integration will manage
              signed URLs, private buckets and
              automatic file cleanup.
            </p>

          </div>

        </div>
              </CardContent>

    </Card>
  );
}