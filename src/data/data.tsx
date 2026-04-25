// this file is used to export all the text, icons, images used in the project

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { service, teamMember } from "../types";
import {
  appDevelopmentLottieOptions,
  cameraLottieOptions,
  marketingLottieOptions,
  mediaManagmentLottieOptions,
  webDesignLottieOptions,
  WebDevelopmentLottieOptions,
} from "./lottiesOptions";
//import { ListItem } from "@material-tailwind/react";

export const phoneNumber = "0504421904";

export const socialLinks = [
  {
    to: "https://www.tiktok.com/@tb.media_tec?_t=ZS-8uAP2isxbd3&_r=1",
    icon: <FaTiktok />,
  },

  {
    to: "https://www.instagram.com/tb_media_1",
    icon: <FaInstagram />,
  },
  {
    to: "https://www.facebook.com/profile.php?id=61573606581041&locale=ar_AR",
    icon: <FaFacebook />,
  },
  {
    to: "https://www.linkedin.com/in/tb-media-tec-978b7b352/",
    icon: <FaLinkedin />,
  },

  {
    to: " https://www.youtube.com/@TBMedia-SA",
    icon: <FaYoutube />
  },
  
];

export const headerLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/how-are-we", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/partners", label: "شركائنا" },
  { to: "/contact-us", label: "تواصل معنا" },
];

export const headerSocialLinks = [
  {
    to: "https://www.tiktok.com/@tb.media_tec?_t=ZS-8uAP2isxbd3&_r=1",
    icon: <FaTiktok />,
  },

  {
    to: "https://www.instagram.com/tb_media_1",
    icon: <FaInstagram />,
  },
  {
    to: "https://www.facebook.com/profile.php?id=61573606581041&locale=ar_AR",
    icon: <FaFacebook />,
  },
  {
    to: "https://www.linkedin.com/in/tb-media-tec-978b7b352/",
    icon: <FaLinkedin />,
  },

  {
    to: " https://www.youtube.com/@TBMedia-SA",
    icon: <FaYoutube />
  },
];

export const homePageFeatures = [
  {
    title: "فريق متكامل ومتخصص",
    description:
      "نعمل كفريق واحد متماسك، كل فرد يمتلك الخبرة والمعرفة اللازمة لضمان نجاح مشروعك.",
    icon: "👥",
  },
  {
    title: "الإتقان والاحترافية",
    description:
      "فريقنا المكون من الخبراء ملتزم بتقديم خدمات عالية الجودة تلبّي أعلى معايير الاحترافية.",
    icon: "⌨️",
  },
  {
    title: "رؤية ثاقبة وخطط مدروسة",
    description:
      "نقدّم استراتيجيات شاملة ومخططات عمل تفصيلية مصممة خصيصًا لتحقيق أهدافك.",
    icon: "👁️",
  },
  {
    title: "أسعار تنافسية",
    description:
      "نقدّم لك أفضل الأسعار في السوق مع ضمان تقديم قيمة مضافة لمشروعك.",
    icon: "💰",
  },
  {
    title: "دعم فني مستمر",
    description:
      "نقدّم لك الدعم الفني اللازم والمتخصص على مدار الساعة لضمان سير عملك بسلاسة.",
    icon: "💻",
  },
  {
    title: "حلول تلبي احتياجاتك",
    description:
      "نقدّم لك حلولًا متكاملة تغطي جميع جوانب مشروعك، بدءًا من التخطيط وحتى التنفيذ.",
    icon: "📱",
  },
];


export const partners = ["partner-9.png",  "partner-4.png","partner-5.png" ,"/partner-2.png",
   "/partner-3.png","/partner-1.png","partner-6.png","partner-7.png","partner-10.png","partner-11.png","partner-12.png","partner-13.png","partner-14.png"];

export const services = [
  {
    title: "التسويق الرقمي",
    icon: "/digital-marketing.png",
  },

  {
    title: "إدارة حسابات سوشيال ميديا ",
    icon: "/social-media.png",
  },
  {
    title: "تصاميم وبناء هوية تجارية",
    icon: "/identity.png",
  },
  {
    title: "تصوير الفعاليات والمنتجات ",
    icon: "/camera.png",
  },

  // {
  //   title: "موشن غرافيك",
  //   icon: "/motion-graphics.png",
  // }

  {
    title: "تصميم مواقع ويب",
    icon: "/web-dev.png",
  },

  {
    title: "تصميم تطبيقات الموبايل",
    icon: "/app-dev.png",
  },
];

export const team: teamMember[] = [
  {
    name: "وليد طالب",
    img: "/home.png",
    title: "مؤسس ومدير العمل",
    social: [
      { type: "whatsapp", link: "https://wa.me/+966575455328" },
      { type: "facebook", link: "" },
      { type: "linkedin", link: "" },
    ],
  },
];

export const howAreWetextArr = [
  "نفهم تطلعاتكم",
  "نجعل نشاطهم التجاري أكثر فعالية",
  "نركز على الإبداع والعمل باحترافية عالية",
  "لا نغفل أهمية ضمان الأمان والحماية",
];

export const extendedServices: service[] = [
  {
    title: "التصوير ",
    description:
      "تصوير المنتجات  والفعاليات بكل احترافية ,نقدم خدمات متنوعة تشمل تصوير المنتجات وأصناف الطعام بشكل احترافي لتسليط الضوء على الأطباق بأعلى جودة، بالإضافة إلى تصوير الفعاليات والمناسبات بكل تفاصيلها الهامة، من تقارير مصورة وفيديوهات احترافية. نحن نلتزم بتقديم محتوى متميز يعكس هوية عملك بأعلى مستوى من الجودة والإبداع.",
    lottie: { options: cameraLottieOptions },
    imageAlignment: "left",
  },

  {
    title: "التسويق الرقمي والإعلانات وإنشاء الخطط التسويقية",
    description:
      " نقدم لك حلولاً شاملة للتسويق الرقمي من خلال إنشاء حملات إعلانية موجهة على منصات متنوعة مثل فيسبوك، إنستغرام، جوجل وغيرها. نحن نعمل على تطوير استراتيجيات تسويقية مبتكرة لزيادة الوعي بالعلامة التجارية، جذب العملاء المحتملين، وتحقيق نتائج قابلة للقياس. بدءًا من تحديد الجمهور المستهدف، مرورًا بتصميم الحملات الإعلانية، وصولًا إلى تحليل الأداء، نساعدك في تحقيق أهدافك التسويقية بكل احترافية وفعالية.",
    lottie: { options: marketingLottieOptions },
    imageAlignment: "right",
  },

  {
    title: " إدارة مواقع التواصل الاجتماعي ",
    description:
      "نساعدك في بناء وتحسين وجودك الرقمي من خلال إدارة شاملة لحساباتك على منصات التواصل الاجتماعي. نقدم لك استراتيجية مخصصة تشمل إنشاء محتوى مميز، التفاعل مع جمهورك، وتحليل الأداء لضمان تحقيق أفضل النتائج. من خلال إدارة فعّالة لحساباتك، نعمل على زيادة التفاعل وبناء علاقات مستدامة مع جمهورك، مما يسهم في تعزيز وعي العلامة التجارية وتحقيق أهدافك التسويقية.",
    lottie: { options: mediaManagmentLottieOptions },
    imageAlignment: "left",
  },
  {
    title: "التصاميم وبناء هوية تجارية",
    description:
      "  نقدم حلول تصميم مبتكرة لزيادة تأثير علامتك التجارية على منصات السوشيال ميديا. من خلال تصميمات جذابة وفريدة، نساعدك على جذب انتباه جمهورك وتعزيز تفاعلك معهم. كما نوفر لك تصميم هوية تجارية متكاملة تشمل الشعار والألوان والخطوط، لتعكس رؤيتك وتعزز مصداقية علامتك التجارية. هدفنا هو تعزيز وجودك الرقمي وبناء علاقة قوية ومستدامة مع جمهورك. ",
    lottie: { options: webDesignLottieOptions },
    imageAlignment: "right",
  },

  {
    title: "تصميم تطبيقات الموبايل",
    description:
      "نقدم لك تصميم وتطوير تطبيقات موبايل بسيطة وفعّالة تلبي احتياجاتك بشكل سريع ومباشر. نحن نركز على تقديم تجربة مستخدم سهلة ومريحة، مما يضمن لتطبيقك واجهة مبتكرة وسهلة الاستخدام. سواء كنت بحاجة إلى تطبيق خفيف لعرض منتجاتك أو خدمة تفاعلية، نحن هنا لتحويل فكرتك إلى تطبيق يعمل بسلاسة ويعزز تواجدك الرقمي.",
    lottie: { options: appDevelopmentLottieOptions },
    imageAlignment: "left",
  },
  {
    title: "تصميم مواقع ويب",
    description:
      " نقدم لك تصميم مواقع ويب بسيطة واحترافية تضمن لك تجربة مستخدم مريحة وسهلة. نحن نركز على تقديم مواقع سريعة الاستجابة، تصميمات نظيفة، وهيكلية واضحة، بحيث يمكن لزوارك التفاعل معها بكل سهولة. سواء كنت تحتاج إلى موقع شخصي، تجاري، أو مدونة، نحن هنا لتحويل أفكارك إلى موقع ويب يعمل بكفاءة ويعكس هويتك الرقمية بشكل بسيط وفعّال.",
    lottie: { options: WebDevelopmentLottieOptions },
    imageAlignment: "right",
  },
];
