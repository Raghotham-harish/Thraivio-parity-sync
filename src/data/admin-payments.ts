import type { AdminPayment } from "@/types/admin-payment";

export const adminPayments: AdminPayment[] = [
  {
    id: "PAY-000001",
    paymentNumber: "CC-PMT-2026-000001",

    status: "paid",

    student: {
      id: "STD-001",
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      avatar: "https://i.pravatar.cc/300?img=11",
      phone: "+91 9876543210",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      joinedAt: "2025-07-18",
    },

    mentor: {
      id: "MEN-001",
      name: "Aman Verma",
      role: "Senior Software Engineer",
      company: "Google",
      avatar: "https://i.pravatar.cc/300?img=21",
      email: "aman@example.com",
      phone: "+91 9000011111",
      verified: true,
    },

    purchase: {
      category: "program",
      title: "Full Stack Interview Bootcamp",
      description: "8 Week Premium Mentorship Program",
      planType: "Premium",
      bookingDate: "2026-07-03",
      bookingTime: "06:00 PM",
      duration: "8 Weeks",
      quantity: 1,
    },

    coupon: {
      code: "WELCOME10",
      type: "percentage",
      value: 10,
      discountAmount: 2000,
    },

    breakdown: {
      currency: "INR",
      subtotal: 20000,
      discount: 2000,
      tax: 3240,
      platformFee: 1800,
      mentorPayout: 17440,
      totalAmount: 21240,
    },

    billing: {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 9876543210",
      address: "Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400050",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "INV-000001",
      number: "INV-2026-000001",
      url: "/documents/invoices/invoice-000001.pdf",
      generatedAt: "2026-07-03T18:15:00",
    },

    receipt: {
      id: "RCT-000001",
      number: "RCT-2026-000001",
      url: "/documents/receipts/receipt-000001.pdf",
      generatedAt: "2026-07-03T18:16:00",
    },

    payment: {
      paymentMethod: "upi",
      paymentGateway: "razorpay",
      transactionId: "TXN8723649182",
      orderId: "ORD982371823",
      paymentDate: "2026-07-03T18:12:00",
      createdAt: "2026-07-03T18:12:00",
      updatedAt: "2026-07-03T18:16:00",
    },

    timeline: [
      {
        id: "TL-1",
        title: "Payment Initiated",
        description: "Student initiated payment.",
        createdAt: "2026-07-03T18:10:00",
        createdBy: "System",
      },
      {
        id: "TL-2",
        title: "Payment Successful",
        description: "Payment received successfully.",
        createdAt: "2026-07-03T18:12:00",
        createdBy: "Razorpay",
      },
      {
        id: "TL-3",
        title: "Invoice Generated",
        description: "Invoice created automatically.",
        createdAt: "2026-07-03T18:15:00",
        createdBy: "System",
      },
    ],
  },

  {
    id: "PAY-000002",
    paymentNumber: "CC-PMT-2026-000002",

    status: "pending",

    student: {
      id: "STD-002",
      name: "Priya Patel",
      email: "priya@example.com",
      avatar: "https://i.pravatar.cc/300?img=32",
      phone: "+91 9898989898",
      country: "India",
      state: "Gujarat",
      city: "Ahmedabad",
      joinedAt: "2025-10-14",
    },

    mentor: {
      id: "MEN-002",
      name: "Neha Kapoor",
      role: "Product Manager",
      company: "Microsoft",
      avatar: "https://i.pravatar.cc/300?img=41",
      email: "neha@example.com",
      phone: "+91 9111111111",
      verified: true,
    },

    purchase: {
      category: "session",
      title: "1:1 Career Guidance",
      description: "Live Career Session",
      planType: "Standard",
      bookingDate: "2026-07-06",
      bookingTime: "08:30 PM",
      duration: "60 Minutes",
      quantity: 1,
    },

    coupon: {
      code: "",
      type: "flat",
      value: 0,
      discountAmount: 0,
    },

    breakdown: {
      currency: "INR",
      subtotal: 3500,
      discount: 0,
      tax: 630,
      platformFee: 350,
      mentorPayout: 3150,
      totalAmount: 4130,
    },

    billing: {
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "+91 9898989898",
      address: "Satellite Road",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      postalCode: "380015",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "INV-000002",
      number: "INV-2026-000002",
      url: "/documents/invoices/invoice-000002.pdf",
      generatedAt: "",
    },

    receipt: {
      id: "RCT-000002",
      number: "RCT-2026-000002",
      url: "/documents/receipts/receipt-000002.pdf",
      generatedAt: "",
    },

    payment: {
      paymentMethod: "credit-card",
      paymentGateway: "stripe",
      transactionId: "TXN762893742",
      orderId: "ORD872398742",
      paymentDate: "2026-07-04T10:20:00",
      createdAt: "2026-07-04T10:20:00",
      updatedAt: "2026-07-04T10:20:00",
    },

    timeline: [
      {
        id: "TL-4",
        title: "Payment Initiated",
        description: "Card authorization pending.",
        createdAt: "2026-07-04T10:20:00",
        createdBy: "Stripe",
      },
    ],
  },

  {
    id: "PAY-000003",
    paymentNumber: "CC-PMT-2026-000003",

    status: "failed",

    student: {
      id: "STD-003",
      name: "Arjun Singh",
      email: "arjun@example.com",
      avatar: "https://i.pravatar.cc/300?img=18",
      phone: "+91 9777777777",
      country: "India",
      state: "Delhi",
      city: "New Delhi",
      joinedAt: "2025-09-21",
    },

    mentor: {
      id: "MEN-003",
      name: "Ritika Malhotra",
      role: "Engineering Manager",
      company: "Amazon",
      avatar: "https://i.pravatar.cc/300?img=54",
      email: "ritika@example.com",
      phone: "+91 9333333333",
      verified: true,
    },

    purchase: {
      category: "event",
      title: "System Design Masterclass",
      description: "Live Workshop",
      planType: "Event Pass",
      bookingDate: "2026-07-09",
      bookingTime: "07:00 PM",
      duration: "3 Hours",
      quantity: 1,
    },

    coupon: {
      code: "EVENT15",
      type: "percentage",
      value: 15,
      discountAmount: 750,
    },

    breakdown: {
      currency: "INR",
      subtotal: 5000,
      discount: 750,
      tax: 765,
      platformFee: 425,
      mentorPayout: 3825,
      totalAmount: 5015,
    },

    billing: {
      name: "Arjun Singh",
      email: "arjun@example.com",
      phone: "+91 9777777777",
      address: "Dwarka",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      postalCode: "110075",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    receipt: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    payment: {
      paymentMethod: "debit-card",
      paymentGateway: "stripe",
      transactionId: "TXN000FAILED92",
      orderId: "ORD000FAILED92",
      paymentDate: "2026-07-04T11:42:00",
      createdAt: "2026-07-04T11:42:00",
      updatedAt: "2026-07-04T11:43:00",
    },

    timeline: [
      {
        id: "TL-5",
        title: "Payment Failed",
        description: "Bank declined the transaction.",
        createdAt: "2026-07-04T11:43:00",
        createdBy: "Stripe",
      },
    ],
  },

    {
    id: "PAY-000004",
    paymentNumber: "CC-PMT-2026-000004",

    status: "refunded",

    student: {
      id: "STD-004",
      name: "Sneha Joshi",
      email: "sneha@example.com",
      avatar: "https://i.pravatar.cc/300?img=44",
      phone: "+91 9811111111",
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      joinedAt: "2025-11-04",
    },

    mentor: {
      id: "MEN-004",
      name: "Rohit Mehra",
      role: "Staff Engineer",
      company: "Adobe",
      avatar: "https://i.pravatar.cc/300?img=55",
      email: "rohit@example.com",
      phone: "+91 9222222222",
      verified: true,
    },

    purchase: {
      category: "monthly-program",
      title: "Advanced React Mentorship",
      description: "4 Week Live Program",
      planType: "Monthly Premium",
      bookingDate: "2026-07-10",
      bookingTime: "07:30 PM",
      duration: "4 Weeks",
      quantity: 1,
    },

    coupon: {
      code: "REACT20",
      type: "percentage",
      value: 20,
      discountAmount: 3000,
    },

    breakdown: {
      currency: "INR",
      subtotal: 15000,
      discount: 3000,
      tax: 2160,
      platformFee: 1200,
      mentorPayout: 12960,
      totalAmount: 14160,
    },

    billing: {
      name: "Sneha Joshi",
      email: "sneha@example.com",
      phone: "+91 9811111111",
      address: "Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "560038",
    },

    refund: {
      status: "completed",
      amount: 14160,
      reason: "Student requested cancellation before first session.",
      requestedAt: "2026-07-05T12:30:00",
      processedAt: "2026-07-05T16:10:00",
    },

    invoice: {
      id: "INV-000004",
      number: "INV-2026-000004",
      url: "/documents/invoices/invoice-000004.pdf",
      generatedAt: "2026-07-04T14:15:00",
    },

    receipt: {
      id: "RCT-000004",
      number: "RCT-2026-000004",
      url: "/documents/receipts/receipt-000004.pdf",
      generatedAt: "2026-07-04T14:16:00",
    },

    payment: {
      paymentMethod: "paypal",
      paymentGateway: "paypal",
      transactionId: "PAYPAL92387423",
      orderId: "ORD92387423",
      paymentDate: "2026-07-04T14:10:00",
      createdAt: "2026-07-04T14:10:00",
      updatedAt: "2026-07-05T16:10:00",
    },

    timeline: [
      {
        id: "TL-6",
        title: "Payment Successful",
        description: "Payment completed successfully.",
        createdAt: "2026-07-04T14:10:00",
        createdBy: "PayPal",
      },
      {
        id: "TL-7",
        title: "Refund Requested",
        description: "Student requested refund.",
        createdAt: "2026-07-05T12:30:00",
        createdBy: "Student",
      },
      {
        id: "TL-8",
        title: "Refund Completed",
        description: "Amount refunded successfully.",
        createdAt: "2026-07-05T16:10:00",
        createdBy: "Admin",
      },
    ],
  },

  {
    id: "PAY-000005",
    paymentNumber: "CC-PMT-2026-000005",

    status: "cancelled",

    student: {
      id: "STD-005",
      name: "Karan Gupta",
      email: "karan@example.com",
      avatar: "https://i.pravatar.cc/300?img=12",
      phone: "+91 9888888888",
      country: "India",
      state: "Punjab",
      city: "Ludhiana",
      joinedAt: "2026-01-14",
    },

    mentor: {
      id: "MEN-005",
      name: "Anjali Rao",
      role: "Tech Lead",
      company: "Netflix",
      avatar: "https://i.pravatar.cc/300?img=51",
      email: "anjali@example.com",
      phone: "+91 9666666666",
      verified: true,
    },

    purchase: {
      category: "session",
      title: "Mock Interview",
      description: "Senior Frontend Interview",
      planType: "Professional",
      bookingDate: "2026-07-12",
      bookingTime: "08:00 PM",
      duration: "90 Minutes",
      quantity: 1,
    },

    coupon: {
      code: "",
      type: "flat",
      value: 0,
      discountAmount: 0,
    },

    breakdown: {
      currency: "INR",
      subtotal: 4000,
      discount: 0,
      tax: 720,
      platformFee: 400,
      mentorPayout: 3600,
      totalAmount: 4720,
    },

    billing: {
      name: "Karan Gupta",
      email: "karan@example.com",
      phone: "+91 9888888888",
      address: "Model Town",
      city: "Ludhiana",
      state: "Punjab",
      country: "India",
      postalCode: "141001",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    receipt: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    payment: {
      paymentMethod: "wallet",
      paymentGateway: "manual",
      transactionId: "CANCEL847283",
      orderId: "ORD847283",
      paymentDate: "2026-07-04T17:20:00",
      createdAt: "2026-07-04T17:20:00",
      updatedAt: "2026-07-04T17:45:00",
    },

    timeline: [
      {
        id: "TL-9",
        title: "Order Cancelled",
        description: "Payment cancelled before completion.",
        createdAt: "2026-07-04T17:45:00",
        createdBy: "Student",
      },
    ],
  },

  {
    id: "PAY-000006",
    paymentNumber: "CC-PMT-2026-000006",

    status: "paid",

    student: {
      id: "STD-006",
      name: "Vikas Yadav",
      email: "vikas@example.com",
      avatar: "https://i.pravatar.cc/300?img=16",
      phone: "+91 9890001111",
      country: "India",
      state: "Uttar Pradesh",
      city: "Lucknow",
      joinedAt: "2025-12-08",
    },

    mentor: {
      id: "MEN-006",
      name: "Pooja Sharma",
      role: "Engineering Director",
      company: "Flipkart",
      avatar: "https://i.pravatar.cc/300?img=48",
      email: "pooja@example.com",
      phone: "+91 9555555555",
      verified: true,
    },

    purchase: {
      category: "program",
      title: "DSA Placement Program",
      description: "12 Week Intensive Bootcamp",
      planType: "Elite",
      bookingDate: "2026-07-15",
      bookingTime: "06:30 PM",
      duration: "12 Weeks",
      quantity: 1,
    },

    coupon: {
      code: "SUMMER500",
      type: "flat",
      value: 500,
      discountAmount: 500,
    },

    breakdown: {
      currency: "INR",
      subtotal: 25000,
      discount: 500,
      tax: 4410,
      platformFee: 2450,
      mentorPayout: 22050,
      totalAmount: 28910,
    },

    billing: {
      name: "Vikas Yadav",
      email: "vikas@example.com",
      phone: "+91 9890001111",
      address: "Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      postalCode: "226010",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "INV-000006",
      number: "INV-2026-000006",
      url: "/documents/invoices/invoice-000006.pdf",
      generatedAt: "2026-07-04T19:05:00",
    },

    receipt: {
      id: "RCT-000006",
      number: "RCT-2026-000006",
      url: "/documents/receipts/receipt-000006.pdf",
      generatedAt: "2026-07-04T19:06:00",
    },

    payment: {
      paymentMethod: "net-banking",
      paymentGateway: "cashfree",
      transactionId: "CF927364923",
      orderId: "ORD927364923",
      paymentDate: "2026-07-04T19:00:00",
      createdAt: "2026-07-04T19:00:00",
      updatedAt: "2026-07-04T19:06:00",
    },

    timeline: [
      {
        id: "TL-10",
        title: "Payment Successful",
        description: "Payment completed successfully.",
        createdAt: "2026-07-04T19:00:00",
        createdBy: "Cashfree",
      },
      {
        id: "TL-11",
        title: "Invoice Generated",
        description: "Invoice generated automatically.",
        createdAt: "2026-07-04T19:05:00",
        createdBy: "System",
      },
    ],
  },
    {
    id: "PAY-000007",
    paymentNumber: "CC-PMT-2026-000007",

    status: "paid",

    student: {
      id: "STD-007",
      name: "Ankit Mishra",
      email: "ankit.mishra@example.com",
      avatar: "https://i.pravatar.cc/300?img=27",
      phone: "+91 9876500011",
      country: "India",
      state: "Madhya Pradesh",
      city: "Bhopal",
      joinedAt: "2025-08-12",
    },

    mentor: {
      id: "MEN-007",
      name: "Sakshi Arora",
      role: "Senior Engineering Manager",
      company: "Adobe",
      avatar: "https://i.pravatar.cc/300?img=63",
      email: "sakshi@example.com",
      phone: "+91 9444444444",
      verified: true,
    },

    purchase: {
      category: "session",
      title: "Frontend System Design",
      description: "Advanced Live Mentoring Session",
      planType: "Premium Session",
      bookingDate: "2026-07-18",
      bookingTime: "07:00 PM",
      duration: "90 Minutes",
      quantity: 1,
    },

    coupon: {
      code: "FRONTEND15",
      type: "percentage",
      value: 15,
      discountAmount: 900,
    },

    breakdown: {
      currency: "INR",
      subtotal: 6000,
      discount: 900,
      tax: 918,
      platformFee: 510,
      mentorPayout: 4590,
      totalAmount: 6018,
    },

    billing: {
      name: "Ankit Mishra",
      email: "ankit.mishra@example.com",
      phone: "+91 9876500011",
      address: "Arera Colony",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      postalCode: "462016",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "INV-000007",
      number: "INV-2026-000007",
      url: "/documents/invoices/invoice-000007.pdf",
      generatedAt: "2026-07-05T18:05:00",
    },

    receipt: {
      id: "RCT-000007",
      number: "RCT-2026-000007",
      url: "/documents/receipts/receipt-000007.pdf",
      generatedAt: "2026-07-05T18:06:00",
    },

    payment: {
      paymentMethod: "credit-card",
      paymentGateway: "stripe",
      transactionId: "TXN927364001",
      orderId: "ORD927364001",
      paymentDate: "2026-07-05T18:00:00",
      createdAt: "2026-07-05T18:00:00",
      updatedAt: "2026-07-05T18:06:00",
    },

    timeline: [
      {
        id: "TL-12",
        title: "Payment Initiated",
        description: "Student initiated payment.",
        createdAt: "2026-07-05T17:58:00",
        createdBy: "Student",
      },
      {
        id: "TL-13",
        title: "Payment Successful",
        description: "Payment captured successfully.",
        createdAt: "2026-07-05T18:00:00",
        createdBy: "Stripe",
      },
      {
        id: "TL-14",
        title: "Invoice Generated",
        description: "Invoice generated automatically.",
        createdAt: "2026-07-05T18:05:00",
        createdBy: "System",
      },
    ],
  },

  {
    id: "PAY-000008",
    paymentNumber: "CC-PMT-2026-000008",

    status: "pending",

    student: {
      id: "STD-008",
      name: "Meera Nair",
      email: "meera.nair@example.com",
      avatar: "https://i.pravatar.cc/300?img=47",
      phone: "+91 9866600022",
      country: "India",
      state: "Kerala",
      city: "Kochi",
      joinedAt: "2025-12-01",
    },

    mentor: {
      id: "MEN-008",
      name: "Harshit Jain",
      role: "Principal Software Engineer",
      company: "Uber",
      avatar: "https://i.pravatar.cc/300?img=68",
      email: "harshit@example.com",
      phone: "+91 9333300000",
      verified: true,
    },

    purchase: {
      category: "monthly-program",
      title: "Backend Engineering Mentorship",
      description: "Monthly Career Growth Program",
      planType: "Monthly Elite",
      bookingDate: "2026-07-20",
      bookingTime: "08:00 PM",
      duration: "4 Weeks",
      quantity: 1,
    },

    coupon: {
      code: "MONTH500",
      type: "flat",
      value: 500,
      discountAmount: 500,
    },

    breakdown: {
      currency: "INR",
      subtotal: 18000,
      discount: 500,
      tax: 3150,
      platformFee: 1750,
      mentorPayout: 15750,
      totalAmount: 20650,
    },

    billing: {
      name: "Meera Nair",
      email: "meera.nair@example.com",
      phone: "+91 9866600022",
      address: "MG Road",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      postalCode: "682016",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "INV-000008",
      number: "INV-2026-000008",
      url: "/documents/invoices/invoice-000008.pdf",
      generatedAt: "",
    },

    receipt: {
      id: "RCT-000008",
      number: "RCT-2026-000008",
      url: "/documents/receipts/receipt-000008.pdf",
      generatedAt: "",
    },

    payment: {
      paymentMethod: "upi",
      paymentGateway: "phonepe",
      transactionId: "PHONEPE83726491",
      orderId: "ORD83726491",
      paymentDate: "2026-07-06T09:15:00",
      createdAt: "2026-07-06T09:15:00",
      updatedAt: "2026-07-06T09:15:00",
    },

    timeline: [
      {
        id: "TL-15",
        title: "Payment Initiated",
        description: "Waiting for payment confirmation.",
        createdAt: "2026-07-06T09:15:00",
        createdBy: "PhonePe",
      },
    ],
  },
    {
    id: "PAY-000009",
    paymentNumber: "CC-PMT-2026-000009",

    status: "failed",

    student: {
      id: "STD-009",
      name: "Riya Kulkarni",
      email: "riya.kulkarni@example.com",
      avatar: "https://i.pravatar.cc/300?img=39",
      phone: "+91 9812345678",
      country: "India",
      state: "Maharashtra",
      city: "Pune",
      joinedAt: "2025-10-20",
    },

    mentor: {
      id: "MEN-009",
      name: "Abhishek Sharma",
      role: "Senior Backend Engineer",
      company: "Microsoft",
      avatar: "https://i.pravatar.cc/300?img=70",
      email: "abhishek@example.com",
      phone: "+91 9321111111",
      verified: true,
    },

    purchase: {
      category: "event",
      title: "Microservices Architecture Masterclass",
      description: "Live Weekend Workshop",
      planType: "Workshop Pass",
      bookingDate: "2026-07-24",
      bookingTime: "05:00 PM",
      duration: "4 Hours",
      quantity: 1,
    },

    coupon: {
      code: "EVENT25",
      type: "percentage",
      value: 25,
      discountAmount: 2000,
    },

    breakdown: {
      currency: "INR",
      subtotal: 8000,
      discount: 2000,
      tax: 1080,
      platformFee: 600,
      mentorPayout: 5400,
      totalAmount: 7080,
    },

    billing: {
      name: "Riya Kulkarni",
      email: "riya.kulkarni@example.com",
      phone: "+91 9812345678",
      address: "Hinjewadi Phase 2",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      postalCode: "411057",
    },

    refund: {
      status: "not-requested",
      amount: 0,
      reason: "",
    },

    invoice: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    receipt: {
      id: "",
      number: "",
      url: "",
      generatedAt: "",
    },

    payment: {
      paymentMethod: "debit-card",
      paymentGateway: "stripe",
      transactionId: "TXNFAIL98273101",
      orderId: "ORDFAIL98273101",
      paymentDate: "2026-07-07T11:40:00",
      createdAt: "2026-07-07T11:40:00",
      updatedAt: "2026-07-07T11:41:00",
    },

    timeline: [
      {
        id: "TL-16",
        title: "Payment Initiated",
        description: "Customer started checkout.",
        createdAt: "2026-07-07T11:39:00",
        createdBy: "Student",
      },
      {
        id: "TL-17",
        title: "Bank Verification",
        description: "Awaiting bank authorization.",
        createdAt: "2026-07-07T11:40:00",
        createdBy: "Stripe",
      },
      {
        id: "TL-18",
        title: "Payment Failed",
        description: "Issuing bank declined the transaction.",
        createdAt: "2026-07-07T11:41:00",
        createdBy: "Stripe",
      },
    ],
  },
    {
    id: "PAY-000010",
    paymentNumber: "CC-PMT-2026-000010",

    status: "refunded",

    student: {
      id: "STD-010",
      name: "Aditya Verma",
      email: "aditya.verma@example.com",
      avatar: "https://i.pravatar.cc/300?img=33",
      phone: "+91 9899912345",
      country: "India",
      state: "Rajasthan",
      city: "Jaipur",
      joinedAt: "2025-09-18",
    },

    mentor: {
      id: "MEN-010",
      name: "Nidhi Agarwal",
      role: "Principal Engineer",
      company: "Atlassian",
      avatar: "https://i.pravatar.cc/300?img=73",
      email: "nidhi@example.com",
      phone: "+91 9444455555",
      verified: true,
    },

    purchase: {
      category: "program",
      title: "Complete System Design Program",
      description: "12 Week Premium Live Mentorship",
      planType: "Elite",
      bookingDate: "2026-07-28",
      bookingTime: "06:30 PM",
      duration: "12 Weeks",
      quantity: 1,
    },

    coupon: {
      code: "ELITE1000",
      type: "flat",
      value: 1000,
      discountAmount: 1000,
    },

    breakdown: {
      currency: "INR",
      subtotal: 30000,
      discount: 1000,
      tax: 5220,
      platformFee: 2900,
      mentorPayout: 26100,
      totalAmount: 34220,
    },

    billing: {
      name: "Aditya Verma",
      email: "aditya.verma@example.com",
      phone: "+91 9899912345",
      address: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      postalCode: "302021",
    },

    refund: {
      status: "completed",
      amount: 34220,
      reason: "Mentor unavailable for scheduled program.",
      requestedAt: "2026-07-08T09:40:00",
      processedAt: "2026-07-08T14:20:00",
    },

    invoice: {
      id: "INV-000010",
      number: "INV-2026-000010",
      url: "/documents/invoices/invoice-000010.pdf",
      generatedAt: "2026-07-08T08:15:00",
    },

    receipt: {
      id: "RCT-000010",
      number: "RCT-2026-000010",
      url: "/documents/receipts/receipt-000010.pdf",
      generatedAt: "2026-07-08T08:16:00",
    },

    payment: {
      paymentMethod: "net-banking",
      paymentGateway: "razorpay",
      transactionId: "TXNRAZ928374651",
      orderId: "ORDRAZ928374651",
      paymentDate: "2026-07-08T08:10:00",
      createdAt: "2026-07-08T08:10:00",
      updatedAt: "2026-07-08T14:20:00",
    },

    timeline: [
      {
        id: "TL-19",
        title: "Payment Successful",
        description: "Payment captured successfully.",
        createdAt: "2026-07-08T08:10:00",
        createdBy: "Razorpay",
      },
      {
        id: "TL-20",
        title: "Invoice Generated",
        description: "Invoice generated automatically.",
        createdAt: "2026-07-08T08:15:00",
        createdBy: "System",
      },
      {
        id: "TL-21",
        title: "Refund Requested",
        description: "Refund requested by support team.",
        createdAt: "2026-07-08T09:40:00",
        createdBy: "Support",
      },
      {
        id: "TL-22",
        title: "Refund Completed",
        description: "Refund processed successfully.",
        createdAt: "2026-07-08T14:20:00",
        createdBy: "Admin",
      },
    ],
  },
];
export const paymentStats = {
  totalPayments: adminPayments.length,

  successfulPayments: adminPayments.filter(
    (payment) => payment.status === "paid"
  ).length,

  pendingPayments: adminPayments.filter(
    (payment) => payment.status === "pending"
  ).length,

  failedPayments: adminPayments.filter(
    (payment) => payment.status === "failed"
  ).length,

  refundedPayments: adminPayments.filter(
    (payment) => payment.status === "refunded"
  ).length,

  cancelledPayments: adminPayments.filter(
    (payment) => payment.status === "cancelled"
  ).length,

  totalRevenue: adminPayments.reduce(
    (total, payment) =>
      payment.status === "paid"
        ? total + payment.breakdown.totalAmount
        : total,
    0
  ),

  refundedAmount: adminPayments.reduce(
    (total, payment) =>
      payment.status === "refunded"
        ? total + payment.refund.amount
        : total,
    0
  ),
};