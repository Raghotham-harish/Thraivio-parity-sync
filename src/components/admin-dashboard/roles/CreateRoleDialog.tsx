import {
  Plus,
  ShieldCheck,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

interface CreateRoleDialogProps {
  open: boolean;

  onCreate: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function CreateRoleDialog({
  open,
  onCreate,
  onOpenChange,
}: CreateRoleDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-2xl">

        <DialogHeader>

          <DialogTitle>
            Create New Role
          </DialogTitle>

          <DialogDescription>
            Create a custom administrator
            role and define its permissions
            across platform modules.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="space-y-2">

              <Label>
                Role Name
              </Label>

              <Input
                placeholder="Finance Manager"
              />

            </div>

            <div className="space-y-2">

              <Label>
                Role Color
              </Label>

              <Input
                type="color"
                defaultValue="#3b82f6"
                className="h-11 rounded-xl"
              />

            </div>

          </div>

          <div className="space-y-2">

            <Label>
              Description
            </Label>

            <Textarea
              rows={4}
              placeholder="Describe this role..."
            />

          </div>

          <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <ShieldCheck className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Permissions
              </h3>

            </div>

            <p className="text-sm text-muted-foreground">
              Backend/API integration will
              dynamically load permission
              modules here.
            </p>

          </div>
                    <DialogFooter>

            <Button
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={onCreate}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Role
            </Button>

          </DialogFooter>

        </div>
              </DialogContent>

    </Dialog>
  );
}