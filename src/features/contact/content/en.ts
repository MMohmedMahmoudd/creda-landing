import type { ContactContent } from "./ar";

const en: ContactContent = {
  eyebrow: "Contact us",
  title: "How can we help?",
  lead: "Send us your question about registration, using the platform, or partnering with Creda, and our team will get in touch.",
  form: {
    youAre: "I am a",
    roles: {
      buyer: "Buyer",
      supplier: "Supplier",
      other: "Other",
    },
    name: "Name",
    namePh: "Full name",
    company: "Business name",
    companyPh: "Store or company name",
    optional: "(optional)",
    phone: "Mobile number",
    phonePh: "+966 5X XXX XXXX",
    email: "Email",
    emailPh: "name@company.sa",
    topic: "Topic",
    topicPh: "Select a topic",
    topics: [
      {
        value: "reg",
        label: "Registration and business verification",
      },
      {
        value: "use",
        label: "Using the platform",
      },
      {
        value: "credit",
        label: "Buying and selling on credit",
      },
      {
        value: "partner",
        label: "Partnerships",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    message: "Your message",
    messagePh: "Describe your question in detail",
    errors: {
      name: "Enter your name",
      phone: "Enter a valid mobile number",
      email: "Email format is invalid",
      topic: "Select a topic",
      msg: "Enter your message",
    },
    submit: "Send",
    privacy: "We use your data only to respond to your inquiry.",
  },
  sent: {
    title: "We received your message",
    thanks: "Thank you {name}. The Creda team will contact you on",
    again: "Send another message",
  },
  aside: {
    account: {
      title: "Have a Creda account?",
      text: "For questions about an order, invoice or payment, open a support ticket from inside your account so your question arrives with the order details.",
      link: "Log in",
    },
    faq: {
      title: "FAQ",
      text: "You may find the answer to your question about registration, credit limits and payment here.",
      buyers: "For buyers",
      suppliers: "For suppliers",
    },
  },
};

export default en;
