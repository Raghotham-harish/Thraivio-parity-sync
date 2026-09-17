import type { AdminPayment } from "@/types/admin-payment";

import {
  Eye,
  RotateCcw,
  Trash2,
  CreditCard,
  MoreHorizontal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentTableRowProps {
  payment: AdminPayment;

  onView: (payment: AdminPayment) => void;
  onRefund: (payment: AdminPayment) => void;
  onStatusChange: (payment: AdminPayment) => void;
  onDelete: (payment: AdminPayment) => void;
}

const statusVariant = {
  paid: "default",
  pending: "secondary",
  failed: "destructive",
  refunded: "outline",
  cancelled: "secondary",
} as const;

export default function PaymentTableRow({
  payment,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
}: PaymentTableRowProps) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/40">

      <td className="px-4 py-4">

        <div className="flex items-center gap-3">

          <img
            src={payment.student.avatar}
            alt={payment.student.name}
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>

            <p className="font-medium">
              {payment.student.name}
            </p>

            <p className="text-sm text-muted-foreground">
              {payment.student.email}
            </p>

          </div>

        </div>

      </td>

      <td className="px-4 py-4">

        <div>

          <p className="font-medium">
            {payment.mentor.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {payment.mentor.company}
          </p>

        </div>

      </td>

      <td className="px-4 py-4">

        <div>

          <p className="font-medium">
            {payment.purchase.title}
          </p>

          <p className="text-sm text-muted-foreground capitalize">
            {payment.purchase.category}
          </p>

        </div>

      </td>

      <td className="px-4 py-4">

        <div>

          <p className="font-semibold">
            ₹
            {payment.breakdown.totalAmount.toLocaleString("en-IN")}
          </p>

          <p className="text-xs text-muted-foreground capitalize">
            {payment.payment.paymentMethod.replace("-", " ")}
          </p>

        </div>

      </td>

      <td className="px-4 py-4">

        <Badge variant={statusVariant[payment.status]}>
          {payment.status}
        </Badge>

      </td>

      <td className="px-4 py-4">

        {new Date(
          payment.payment.paymentDate
        ).toLocaleDateString("en-IN")}

      </td>

      <td className="px-4 py-4">

        <DropdownMenu>

          <DropdownMenuTrigger asChild>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Payment actions"
              title="Actions"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>

          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuItem
              onClick={() => onView(payment)}
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => onStatusChange(payment)}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Update Status
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => onRefund(payment)}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Refund
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-destructive"
              onClick={() => onDelete(payment)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>

          </DropdownMenuContent>

        </DropdownMenu>

      </td>

    </tr>
  );
}