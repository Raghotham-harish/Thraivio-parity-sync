export interface Payment {
  id: string;

  mentorId: number;

  mentorName: string;

  mentorRole: string;

  mentorCompany: string;

  mentorImage: string;

  title: string;

  category:
    | "Program"
    | "Session"
    | "Event";

  amount: number;

  currency: string;

  paymentDate: string;

  paymentMethod:
    | "Card"
    | "UPI"
    | "PayPal"
    | "Bank Transfer";

  transactionId: string;

  invoiceNumber: string;

  status:
    | "paid"
    | "pending"
    | "failed"
    | "refunded";

  invoiceUrl?: string;

  receiptUrl?: string;
}