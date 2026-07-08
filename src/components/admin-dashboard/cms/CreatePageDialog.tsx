import {
  FilePlus2,
  Save,
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

interface CreatePageDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  onCreate: () => void;
}

export default function CreatePageDialog({
  open,
  onOpenChange,
  onCreate,
}: CreatePageDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Create New CMS Page
          </DialogTitle>

          <DialogDescription>
            Create a new website page with
            SEO information, content and
            publishing details.
          </DialogDescription>

        </DialogHeader>

        <div className="grid gap-6">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="space-y-2">

              <Label>
                Page Title
              </Label>

              <Input
                placeholder="Enter page title"
              />

            </div>

            <div className="space-y-2">

              <Label>
                Slug
              </Label>

              <Input
                placeholder="/about-us"
              />

            </div>

          </div>

          <div className="space-y-2">

            <Label>
              Description
            </Label>

            <Textarea
              rows={5}
              placeholder="Enter page description..."
            />

          </div>
                    <div className="grid gap-5 md:grid-cols-2">

            <div className="space-y-2">

              <Label>
                SEO Title
              </Label>

              <Input
                placeholder="SEO title"
              />

            </div>

            <div className="space-y-2">

              <Label>
                Category
              </Label>

              <Input
                placeholder="Home / Blog / FAQ"
              />

            </div>

          </div>

          <div className="space-y-2">

            <Label>
              SEO Description
            </Label>

            <Textarea
              rows={4}
              placeholder="SEO description..."
            />

          </div>

          <DialogFooter>

            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={onCreate}
            >
              <FilePlus2 className="mr-2 h-4 w-4" />
              <Save className="mr-2 h-4 w-4" />
              Create Page
            </Button>
                      </DialogFooter>

        </div>

      </DialogContent>

    </Dialog>
  );
}