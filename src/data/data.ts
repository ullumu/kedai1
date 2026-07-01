import { HeaderItem } from "@/types/menu";
import { FeaturesType } from "@/types/features";
import { ExpertChiefType } from "@/types/expertchief";
import { GalleryImagesType } from "@/types/galleryimage";
import { FooterLinkType } from "@/types/footerlink";
import { FullMenuType } from "@/types/fullmenu";

export const HalalCertificationData = {
  halalLogo: {
    imageSrc: "/images/sertifikat/logo-halal.jpg",
    alt: "Logo Halal Indonesia",
  },
  certificateNumber: {
    label: "Nomor Sertifikat Perizinan",
    value: "P-IRT 8025171021064-30",
  },
};

export const HeaderData: HeaderItem[] = [
  { label: "About Us", href: "/#aboutus" },
  { label: "Menu", href: "/#menu" },
];

export const FeaturesData: FeaturesType[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Elegant Dining Atmosphere",
    subheading:
      "Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Signature Chef Creations",
    subheading:
      "Taste one-of-a-kind dishes crafted with passion by our top culinary team.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Fresh, Local Ingredients",
    subheading:
      "We use locally sourced goods daily for unmatched taste and quality.",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Hassle-Free Reservations",
    subheading:
      "Reserve online in seconds or walk in anytime — we’re ready when you are.",
  },
];

export const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: "Senior Chef",
    name: "Marco Benton",
    imgSrc: "/images/Expert/boyone.png",
  },
  {
    profession: "Junior Chef",
    name: "Elena Rivera",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "John Doe",
    imgSrc: "/images/Expert/boytwo.png",
  },
];

export const GalleryImagesData: GalleryImagesType[] = [
  {
    src: "/images/Gallery/food1.jpg",
    name: "",
    price: 0,
  },
  {
    src: "/images/Gallery/food2.jpg",
    name: "",
    price: 0,
  },
  {
    src: "/images/Gallery/food3.jpg",
    name: "",
    price: 0,
  },
  {
    src: "/images/Gallery/food4.jpg",
    name: "",
    price: 0,
  },
  {
    src: "/images/Gallery/food5.jpg",
    name: "",
    price: 0,
  },
];

export const FullMenuData: FullMenuType[] = [
  {
    name: "",
    price: "",
    description: "",
  },
  {
    name: "",
    price: "",
    description: "",
  },
  {
    name: "",
    price: "",
    description: "",
  },
  
];

export const FooterLinkData: FooterLinkType[] = [
  {
    section: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#aboutus" },
      { label: "Menu", href: "/#menu" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help/FAQ", href: "/" },
      // { label: "Press", href: "/" },
      // { label: "Affiliates", href: "/" },
      // { label: "Hotel owners", href: "/" },
      { label: "Partners", href: "/" },
    ],
  },
];
