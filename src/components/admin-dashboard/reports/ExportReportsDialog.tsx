import {
  Download,
  FileSpreadsheet,
  FileText,
  FileJson,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ExportReportsDialogProps {
  open: boolean;

  includeRevenue: boolean;
  includeUsers: boolean;
  includeMentors: boolean;
  includePayments: boolean;

  onIncludeRevenueChange: (checked: boolean) => void;
  onIncludeUsersChange: (checked: boolean) => void;
  onIncludeMentorsChange: (checked: boolean) => void;
  onIncludePaymentsChange: (checked: boolean) => void;

  onExportExcel: () => void;
  onExportCSV: () => void;
  onExportPDF: () => void;
  onExportJSON: () => void;

  onOpenChange: (open: boolean) => void;
}

export default function ExportReportsDialog({
  open,

  includeRevenue,
  includeUsers,
  includeMentors,
  includePayments,

  onIncludeRevenueChange,
  onIncludeUsersChange,
  onIncludeMentorsChange,
  onIncludePaymentsChange,

  onExportExcel,
  onExportCSV,
  onExportPDF,
  onExportJSON,

  onOpenChange,
}: ExportReportsDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl rounded-3xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <Download className="h-5 w-5" />

            Export Reports

          </DialogTitle>

          <DialogDescription>
            Select the data you want to include
            in your exported report.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex items-center space-x-3 rounded-2xl border p-4">

              <Checkbox
                checked={includeRevenue}
                onCheckedChange={(checked) =>
                  onIncludeRevenueChange(Boolean(checked))
                }
              />

              <Label className="cursor-pointer">
                Include Revenue Analytics
              </Label>

            </div>

            <div className="flex items-center space-x-3 rounded-2xl border p-4">

              <Checkbox
                checked={includeUsers}
                onCheckedChange={(checked) =>
                  onIncludeUsersChange(Boolean(checked))
                }
              />

              <Label className="cursor-pointer">
                Include User Analytics
              </Label>

            </div>

            <div className="flex items-center space-x-3 rounded-2xl border p-4">

              <Checkbox
                checked={includeMentors}
                onCheckedChange={(checked) =>
                  onIncludeMentorsChange(Boolean(checked))
                }
              />

              <Label className="cursor-pointer">
                Include Mentor Analytics
              </Label>

            </div>

            <div className="flex items-center space-x-3 rounded-2xl border p-4">

              <Checkbox
                checked={includePayments}
                onCheckedChange={(checked) =>
                  onIncludePaymentsChange(Boolean(checked))
                }
              />

              <Label className="cursor-pointer">
                Include Payment Analytics
              </Label>

            </div>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            <Button
              variant="outline"
              className="justify-start rounded-xl"
              onClick={onExportExcel}
            >
              <FileSpreadsheet className="mr-2 h-4 w-4 text-emerald-600" />
              Export Excel
            </Button>

            <Button
              variant="outline"
              className="justify-start rounded-xl"
              onClick={onExportCSV}
            >
              <FileText className="mr-2 h-4 w-4 text-blue-600" />
              Export CSV
            </Button>

            <Button
              variant="outline"
              className="justify-start rounded-xl"
              onClick={onExportPDF}
            >
              <FileText className="mr-2 h-4 w-4 text-red-600" />
              Export PDF
            </Button>

            <Button
              variant="outline"
              className="justify-start rounded-xl"
              onClick={onExportJSON}
            >
              <FileJson className="mr-2 h-4 w-4 text-amber-600" />
              Export JSON
            </Button>

          </div>
                    <DialogFooter>

            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={onExportExcel}
            >
              <Download className="mr-2 h-4 w-4" />
              Export Selected Data
            </Button>

          </DialogFooter>

        </div>

      </DialogContent>

    </Dialog>
  );
}