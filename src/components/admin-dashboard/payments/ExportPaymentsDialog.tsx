import { useState } from "react";

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

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Checkbox,
} from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";

interface ExportPaymentsDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  onExport: (
    format: string,
    includeStudent: boolean,
    includeMentor: boolean,
    includeBilling: boolean,
    includeRefunds: boolean
  ) => void;
}

export default function ExportPaymentsDialog({
  open,
  onOpenChange,
  onExport,
}: ExportPaymentsDialogProps) {
  const [format, setFormat] =
    useState("excel");

  const [includeStudent, setIncludeStudent] =
    useState(true);

  const [includeMentor, setIncludeMentor] =
    useState(true);

  const [includeBilling, setIncludeBilling] =
    useState(true);

  const [includeRefunds, setIncludeRefunds] =
    useState(true);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-xl rounded-2xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <Download className="h-5 w-5 text-primary" />

            Export Payments

          </DialogTitle>

          <DialogDescription>

            Export payment records in your
            preferred format.

          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="space-y-2">

            <Label>
              Export Format
            </Label>

            <Select
              value={format}
              onValueChange={setFormat}
            >
              <SelectTrigger className="h-11 rounded-xl">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="excel">

                  <div className="flex items-center gap-2">

                    <FileSpreadsheet className="h-4 w-4" />

                    Excel (.xlsx)

                  </div>

                </SelectItem>

                <SelectItem value="csv">

                  <div className="flex items-center gap-2">

                    <FileText className="h-4 w-4" />

                    CSV (.csv)

                  </div>

                </SelectItem>

                <SelectItem value="json">

                  <div className="flex items-center gap-2">

                    <FileJson className="h-4 w-4" />

                    JSON (.json)

                  </div>

                </SelectItem>

              </SelectContent>

            </Select>

          </div>
                    <div className="rounded-2xl border p-5">

            <h4 className="mb-5 font-semibold">
              Export Options
            </h4>

            <div className="space-y-5">

              <div className="flex items-center space-x-3">

                <Checkbox
                  id="student"
                  checked={includeStudent}
                  onCheckedChange={(checked) =>
                    setIncludeStudent(Boolean(checked))
                  }
                />

                <Label
                  htmlFor="student"
                  className="cursor-pointer"
                >
                  Include Student Information
                </Label>

              </div>

              <div className="flex items-center space-x-3">

                <Checkbox
                  id="mentor"
                  checked={includeMentor}
                  onCheckedChange={(checked) =>
                    setIncludeMentor(Boolean(checked))
                  }
                />

                <Label
                  htmlFor="mentor"
                  className="cursor-pointer"
                >
                  Include Mentor Information
                </Label>

              </div>

              <div className="flex items-center space-x-3">

                <Checkbox
                  id="billing"
                  checked={includeBilling}
                  onCheckedChange={(checked) =>
                    setIncludeBilling(Boolean(checked))
                  }
                />

                <Label
                  htmlFor="billing"
                  className="cursor-pointer"
                >
                  Include Billing Details
                </Label>

              </div>

              <div className="flex items-center space-x-3">

                <Checkbox
                  id="refunds"
                  checked={includeRefunds}
                  onCheckedChange={(checked) =>
                    setIncludeRefunds(Boolean(checked))
                  }
                />

                <Label
                  htmlFor="refunds"
                  className="cursor-pointer"
                >
                  Include Refund Information
                </Label>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">

            <h4 className="font-semibold text-[#2563EB] dark:text-blue-400">
              Export Preview
            </h4>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">

              <p>
                • Format :
                <span className="ml-2 font-medium capitalize text-foreground">
                  {format}
                </span>
              </p>

              <p>
                • Student Details :
                <span className="ml-2 font-medium text-foreground">
                  {includeStudent ? "Included" : "Excluded"}
                </span>
              </p>

              <p>
                • Mentor Details :
                <span className="ml-2 font-medium text-foreground">
                  {includeMentor ? "Included" : "Excluded"}
                </span>
              </p>

              <p>
                • Billing Details :
                <span className="ml-2 font-medium text-foreground">
                  {includeBilling ? "Included" : "Excluded"}
                </span>
              </p>

              <p>
                • Refund Details :
                <span className="ml-2 font-medium text-foreground">
                  {includeRefunds ? "Included" : "Excluded"}
                </span>
              </p>

            </div>

          </div>
        </div>
                  <DialogFooter className="mt-2 gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>

          <Button
            className="rounded-xl"
            onClick={() => {
              onExport(
                format,
                includeStudent,
                includeMentor,
                includeBilling,
                includeRefunds
              );

              onOpenChange(false);
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Payments
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}