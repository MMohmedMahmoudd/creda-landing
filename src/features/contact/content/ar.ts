const ar = {
  eyebrow: "تواصل معنا",
  title: "كيف نقدر نساعدك؟",
  lead: "أرسل لنا استفسارك عن التسجيل أو استخدام المنصة أو الشراكة مع كريدا، ويتواصل معك فريقنا.",
  form: {
    youAre: "أنت",
    roles: {
      buyer: "مشترٍ",
      supplier: "مورّد",
      other: "غير ذلك",
    },
    name: "الاسم",
    namePh: "الاسم الكامل",
    company: "اسم المنشأة",
    companyPh: "اسم المتجر أو الشركة",
    optional: "(اختياري)",
    phone: "رقم الجوال",
    phonePh: "+966 5X XXX XXXX",
    email: "البريد الإلكتروني",
    emailPh: "name@company.sa",
    topic: "الموضوع",
    topicPh: "اختر الموضوع",
    topics: [
      {
        value: "reg",
        label: "التسجيل وتوثيق المنشأة",
      },
      {
        value: "use",
        label: "استخدام المنصة",
      },
      {
        value: "credit",
        label: "البيع والشراء بالآجل",
      },
      {
        value: "partner",
        label: "الشراكات",
      },
      {
        value: "other",
        label: "موضوع آخر",
      },
    ],
    message: "رسالتك",
    messagePh: "اكتب استفسارك بالتفصيل",
    errors: {
      name: "اكتب اسمك",
      phone: "اكتب رقم جوال صحيح",
      email: "صيغة البريد غير صحيحة",
      topic: "اختر الموضوع",
      msg: "اكتب رسالتك",
    },
    submit: "إرسال",
    privacy: "نستخدم بياناتك للرد على استفسارك فقط.",
  },
  sent: {
    title: "وصلتنا رسالتك",
    thanks: "شكرًا {name}. سيتواصل معك فريق كريدا على الرقم",
    again: "إرسال رسالة أخرى",
  },
  aside: {
    account: {
      title: "لديك حساب على كريدا؟",
      text: "للاستفسار عن طلب أو فاتورة أو سداد، افتح تذكرة دعم من داخل حسابك ليصل استفسارك مع تفاصيل الطلب.",
      link: "تسجيل الدخول",
    },
    faq: {
      title: "الأسئلة الشائعة",
      text: "قد تجد إجابة سؤالك عن التسجيل والحدود الائتمانية والسداد هنا.",
      buyers: "للمشترين",
      suppliers: "للموردين",
    },
  },
};

export type ContactContent = typeof ar;
export default ar;
