

export type PaymentStatus =
  | "paid"
  | "pending"
  | "failed"
  | "refunded"
  | "cancelled";

export type PaymentCategory =
  | "program"
  | "session"
  | "event"
  | "monthly-program";

export type PaymentMethod =
  | "upi"
  | "credit-card"
  | "debit-card"
  | "net-banking"
  | "paypal"
  | "stripe"
  | "wallet";

export type PaymentGateway =
  | "stripe"
  | "paypal"
  | "razorpay"
  | "cashfree"
  | "phonepe"
  | "manual";

export type RefundStatus =
  | "not-requested"
  | "requested"
  | "processing"
  | "completed"
  | "rejected";

export interface StudentInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;

  phone: string;

  country: string;
  state: string;
  city: string;

  joinedAt: string;
}

export interface MentorInfo {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;

  email: string;
  phone: string;

  verified: boolean;
}

export interface PurchaseInfo {
  category: PaymentCategory;

  title: string;
  description: string;

  planType: string;

  bookingDate: string;
  bookingTime: string;

  duration: string;

  quantity: number;
}

export interface CouponInfo {
  code: string;

  type: "flat" | "percentage";

  value: number;

  discountAmount: number;
}

export interface PaymentBreakdown {
  currency: string;

  subtotal: number;

  discount: number;

  tax: number;

  platformFee: number;

  mentorPayout: number;

  totalAmount: number;
}

export interface BillingInfo {
  name: string;

  email: string;

  phone: string;

  address: string;

  city: string;

  state: string;

  country: string;

  postalCode: string;
}

export interface RefundInfo {
  status: RefundStatus;

  amount: number;

  reason: string;

  requestedAt?: string;

  processedAt?: string;
}

export interface TimelineItem {
  id: string;

  title: string;

  description: string;

  createdAt: string;

  createdBy: string;
}

export interface InvoiceInfo {
  id: string;

  number: string;

  url: string;

  generatedAt: string;
}

export interface ReceiptInfo {
  id: string;

  number: string;

  url: string;

  generatedAt: string;
}

export interface PaymentMeta {
  paymentMethod: PaymentMethod;

  paymentGateway: PaymentGateway;

  transactionId: string;

  orderId: string;

  paymentDate: string;

  createdAt: string;

  updatedAt: string;
}

export interface AdminPayment {
  id: string;

  paymentNumber: string;

  status: PaymentStatus;

  student: StudentInfo;

  mentor: MentorInfo;

  purchase: PurchaseInfo;

  coupon?: CouponInfo;

  breakdown: PaymentBreakdown;

  billing: BillingInfo;

  refund: RefundInfo;

  invoice: InvoiceInfo;

  receipt: ReceiptInfo;

  payment: PaymentMeta;

  timeline: TimelineItem[];
}