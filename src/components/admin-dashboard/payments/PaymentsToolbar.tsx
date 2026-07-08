import {
  Search,
  RefreshCw,
  Download,
  Grid2X2,
  List,
  Table2,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PaymentsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;

  gateway: string;
  onGatewayChange: (value: string) => void;

  mentor: string;
  onMentorChange: (value: string) => void;

  student: string;
  onStudentChange: (value: string) => void;

  amountRange: string;
  onAmountRangeChange: (value: string) => void;

  dateRange: string;
  onDateRangeChange: (value: string) => void;

  view: "grid" | "list" | "table";
  onViewChange: (view: "grid" | "list" | "table") => void;

  onRefresh: () => void;
  onExport: () => void;
}

export default function PaymentsToolbar({
  search,
  onSearchChange,

  status,
  onStatusChange,

  category,
  onCategoryChange,

  paymentMethod,
  onPaymentMethodChange,

  gateway,
  onGatewayChange,

  mentor,
  onMentorChange,

  student,
  onStudentChange,

  amountRange,
  onAmountRangeChange,

  dateRange,
  onDateRangeChange,

  view,
  onViewChange,

  onRefresh,
  onExport,
}: PaymentsToolbarProps) {
  return (
    <div className="rounded-3xl border bg-background p-5 shadow-sm space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by payment, student, mentor..."
            className="pl-10 h-11 rounded-xl"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onRefresh}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onExport}
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <div className="flex items-center rounded-xl border p-1">
            <Button
              variant={view === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => onViewChange("grid")}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>

            <Button
              variant={view === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => onViewChange("list")}
            >
              <List className="h-4 w-4" />
            </Button>

            <Button
              variant={view === "table" ? "default" : "ghost"}
              size="icon"
              onClick={() => onViewChange("table")}
            >
              <Table2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Status */}
        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Payment Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        {/* Category */}
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="program">Program</SelectItem>
            <SelectItem value="session">Session</SelectItem>
            <SelectItem value="event">Event</SelectItem>
            <SelectItem value="monthly-program">
              Monthly Program
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Payment Method */}
        <Select
          value={paymentMethod}
          onValueChange={onPaymentMethodChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Payment Method" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Methods</SelectItem>
            <SelectItem value="upi">UPI</SelectItem>
            <SelectItem value="credit-card">
              Credit Card
            </SelectItem>
            <SelectItem value="debit-card">
              Debit Card
            </SelectItem>
            <SelectItem value="net-banking">
              Net Banking
            </SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
            <SelectItem value="stripe">Stripe</SelectItem>
            <SelectItem value="wallet">Wallet</SelectItem>
          </SelectContent>
        </Select>

        {/* Gateway */}
        <Select value={gateway} onValueChange={onGatewayChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Gateway" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Gateways</SelectItem>
            <SelectItem value="stripe">Stripe</SelectItem>
            <SelectItem value="razorpay">Razorpay</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
            <SelectItem value="cashfree">Cashfree</SelectItem>
            <SelectItem value="phonepe">PhonePe</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectContent>
        </Select>
      </div>
            {/* Advanced Filters */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Mentor */}
        <Input
          value={mentor}
          onChange={(e) => onMentorChange(e.target.value)}
          placeholder="Search mentor..."
          className="h-11 rounded-xl"
        />

        {/* Student */}
        <Input
          value={student}
          onChange={(e) => onStudentChange(e.target.value)}
          placeholder="Search student..."
          className="h-11 rounded-xl"
        />

        {/* Amount Range */}
        <Select
          value={amountRange}
          onValueChange={onAmountRangeChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Amount Range" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Amounts</SelectItem>
            <SelectItem value="0-1000">₹0 - ₹1,000</SelectItem>
            <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
            <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
            <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
            <SelectItem value="25000+">₹25,000+</SelectItem>
          </SelectContent>
        </Select>

        {/* Date Range */}
        <Select
          value={dateRange}
          onValueChange={onDateRangeChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="last7days">Last 7 Days</SelectItem>
            <SelectItem value="last30days">Last 30 Days</SelectItem>
            <SelectItem value="thisMonth">This Month</SelectItem>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="thisYear">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
            <div className="flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-sm text-muted-foreground">
          Use filters to quickly find payments by student, mentor,
          category, gateway, amount or date.
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              onSearchChange("");
              onStatusChange("all");
              onCategoryChange("all");
              onPaymentMethodChange("all");
              onGatewayChange("all");
              onMentorChange("");
              onStudentChange("");
              onAmountRangeChange("all");
              onDateRangeChange("all");
            }}
          >
            Clear Filters
          </Button>

          <Button onClick={onRefresh}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}