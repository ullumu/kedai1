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
  { label: "Tentang Kami", href: "/#aboutus" },
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
    src: "/images/Gallery/teri-balado.png",
    name: "Teri Balado",
    // images: ["/images/Gallery/teri-balado.png"],
    variants: ["Pedas", "Tidak Pedas"],
  },
  // #2
  {
    src: "/images/Gallery/batagor-tenggiri.png",
    name: "Batagor Tenggiri",
    // images: ["/images/Gallery/batagor-tenggiri-2.png"],
  },
  // #3
  {
    src: "/images/Gallery/tahu-baso-tenggiri.png",
    name: "Tahu Baso Tenggiri",
    // images: ["/images/Gallery/tahu-baso-tenggiri.png"],
  },
  // #4
  {
    src: "/images/Gallery/siomay-dimsum-chili-oil.png",
    name: "Siomay Dimsum Chili Oil",
    // images: ["/images/Gallery/siomay-dimsum-chili-oil.png"],
  },
  // #5
  {
    src: "/images/Gallery/cwie-mie-karet.png",
    name: "Cwie Mie Karet",
    // images: ["/images/Gallery/cwie-mie-karet.png"],
  },
  // #6
  {
    src: "/images/Gallery/pangsit-chili-oil.png",
    name: "Pangsit Chili Oil",
    // images: ["/images/Gallery/pangsit-chili-oil.png"],
  },
];

export const FullMenuData: FullMenuType[] = [
  {
    name: "",
    price: "",
    description: "",
  },
];

export const FooterLinkData: FooterLinkType[] = [
  {
    section: "Perusahaan",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "/#aboutus" },
      { label: "Menu", href: "/#menu" },
    ],
  },
  {
    section: "Dukungan",
    links: [
      { label: "Bantuan/FAQ", href: "/" },
      { label: "Mitra", href: "/" },
    ],
  },
];
