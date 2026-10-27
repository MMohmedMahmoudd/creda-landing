import type { SuppliersContent } from "./ar";

const en: SuppliersContent = {
  hero: {
    badge: "For suppliers and wholesalers",
    title:
      "Sell on credit with peace of mind, and stay in control of collection",
    lead: "Creda connects you with stores, supermarkets and restaurants and gives you what you need to decide on credit sales with confidence: a rating for every buyer, credit limits on your own rules, an enforceable guarantee, and receivables tracking through to collection.",
    cta: "Register as a supplier",
    secondary: "How does Creda work for suppliers?",
    exposureTitle: "Buyer exposure",
    exposureSub: "Credit limit used",
    rows: [
      {
        initial: "N",
        name: "Al-Nokhba Central Market",
        pct: 42,
        tone: "ok",
        badge: "Within limit",
      },
      {
        initial: "D",
        name: "Al-Deera Restaurant",
        pct: 88,
        tone: "warn",
        badge: "Near limit",
      },
      {
        initial: "R",
        name: "Al-Rayyan Grocery",
        pct: 18,
        tone: "info",
        badge: "Promissory note required",
      },
    ],
  },
  strip: {
    label: "One platform to manage:",
    items: [
      "Products",
      "Orders",
      "Credit",
      "Delivery",
      "Payments",
      "Invoices",
      "Collection",
    ],
  },
  why: {
    title: "Credit sales need information, not just personal trust",
    lead: "In wholesale, success doesn't depend on sales volume alone; it depends on managing transactions efficiently, tracking receivables and collection, and making credit decisions based on clear information.",
    points: [
      {
        title: "Credit sales without information",
        text: "Credit decisions are made on personal trust rather than a documented record.",
      },
      {
        title: "Late receivables and scattered follow-up",
        text: "Phone reminders, proof of payment over messages, and no single view of exposure.",
      },
      {
        title: "Paper guarantees that are hard to enforce",
        text: "Paper notes are slow to issue and slow to collect.",
      },
    ],
    closing:
      "Creda reorganizes the relationship between supplier and business buyer.",
  },
  features: {
    title:
      "More organized sales, wider reach, and better control over credit and collection",
    lead: "List your products to a wide base of business buyers, set credit terms yourself, and track your receivables down to the last riyal.",
    items: [
      {
        title: "List and manage your products",
        text: "Manage prices, inventory, offers and delivery areas from one dashboard, and reach the stores, supermarkets and restaurants in your area.",
      },
      {
        title: "Know who you sell to on credit",
        text: "A credit rating for every buyer based on actual behavior: on-time payment rate, late-payment history, and consistency in meeting obligations.",
      },
      {
        title: "Credit limits on your own rules",
        text: "A general policy for all buyers, a rule for each group, and a specific exception for any individual buyer. You decide the limit and the term.",
      },
      {
        title: "Enforceable guarantee",
        text: "Require a verified electronic promissory note before confirming a credit order, per your policy or when the buyer's rating is below the level you set.",
      },
      {
        title: "Track receivables through to collection",
        text: "Outstanding, paid, overdue and due dates on one screen, with reminders, review of proof of payment, and collection confirmation.",
      },
      {
        title: "Invoices, statements and reports",
        text: "Tax invoices, per-buyer account statements, and sales and receivables reports, for clearer and better-documented transactions.",
      },
    ],
    closing:
      "For the supplier, Creda means more organized sales, wider market presence, and better control over credit and collection.",
  },
  how: {
    eyebrow: "How Creda works for suppliers",
    title: "From registration to collection in four steps",
    steps: [
      {
        title: "Register your business",
        text: "Create your account as a supplier and verify your business details.",
      },
      {
        title: "List your products and set your terms",
        text: "Add your products, prices and delivery areas, and set your credit policy: payment term, limits, and promissory note conditions.",
      },
      {
        title: "Receive and prepare orders",
        text: "Review each order with the buyer's rating and available limit, then confirm, prepare and deliver.",
      },
      {
        title: "Collect and follow up",
        text: "The due date starts from your confirmation of the order; track receivables, send reminders, and confirm collection.",
      },
    ],
  },
  credit: {
    eyebrow: "Credit with Creda",
    title: "The credit decision stays in your hands",
    lead: "Creda doesn't stand between you and your customer, and doesn't finance anyone; it gives you what you need to decide with confidence and protects your right when you grant credit.",
    cards: [
      {
        title: "The supplier decides",
        text: "You decide who you sell to on credit, up to what limit, and with what guarantee. The platform shows the information; the decision is yours.",
      },
      {
        title: "The platform is not a financier",
        text: "Creda doesn't lend to buyers or intermediate payments; it provides rating, limit, tracking and documentation tools.",
      },
      {
        title: "Enforceable electronic guarantee",
        text: "A verified electronic promissory note that you require generally, for a group of buyers, or for a specific buyer.",
      },
    ],
  },
  faq: [
    {
      q: "Does Creda interfere in my credit decision?",
      a: "No. You set the credit sale terms, limits and guarantees; the platform shows you the information that helps you decide.",
    },
    {
      q: "What is the buyer rating based on?",
      a: "On their actual behavior: on-time payment rate, late-payment history, and consistency in meeting obligations.",
    },
    {
      q: "How do I set credit limits?",
      a: "At three levels: a general policy for all buyers, a rule for a group of buyers, and a specific exception for an individual buyer.",
    },
    {
      q: "When can I require a promissory note?",
      a: "According to your policy: generally, for a group of buyers, for a specific buyer, or when the buyer's rating is below the level you set.",
    },
    {
      q: "When does the due date start counting?",
      a: "From the date you confirm the order, according to the payment term you set.",
    },
    {
      q: "Do payments go through Creda?",
      a: "No. Payment is made directly between you and the buyer, and you review proof of payment and confirm collection on the platform.",
    },
    {
      q: "Does Creda issue tax invoices and account statements?",
      a: "Yes. Tax invoices for every transaction, account statements for each buyer, and sales and receivables reports.",
    },
  ],
  signup: {
    title: "Start selling on credit with confidence on Creda",
    text: "Create your business account as a supplier, list your products, and set your terms.",
  },
};

export default en;
