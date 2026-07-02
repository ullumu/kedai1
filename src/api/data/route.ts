import { NextResponse } from "next/server";

import { HeaderItem } from "@/types/menu";
import { FeaturesType } from "@/types/features";
import { ExpertChiefType } from "@/types/expertchief";
import { GalleryImagesType } from "@/types/galleryimage";
import { FooterLinkType } from "@/types/footerlink";
import { FullMenuType } from "@/types/fullmenu";

const HeaderData: HeaderItem[] = [
  { label: "Tentang Kami", href: "/#aboutus" },
  { label: "Menu", href: "/#menu" },
  { label: "Pesan Meja", href: "/#reserve" },
  { label: "Dokumentasi", href: "/documentation" },
];

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Suasana Makan yang Elegan",
    subheading:
      "Nikmati suasana hangat dan berkelas yang cocok untuk makan malam romantis atau kumpul bersama teman.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Karya Koki Signature",
    subheading:
      "Rasakan hidangan unik yang dibuat dengan penuh semangat oleh tim kuliner terbaik kami.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Bahan Segar dan Lokal",
    subheading:
      "Kami menggunakan bahan-bahan lokal setiap hari untuk rasa dan kualitas terbaik.",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Reservasi Tanpa Ribet",
    subheading:
      "Reservasi online dalam hitungan detik atau datang langsung kapan saja — kami siap melayani Anda.",
  },
];

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: "Koki Senior",
    name: "Marco Benton",
    imgSrc: "/images/Expert/boyone.png",
  },
  {
    profession: "Koki Junior",
    name: "Elena Rivera",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Koki Junior",
    name: "John Doe",
    imgSrc: "/images/Expert/boytwo.png",
  },
];

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: "/images/Gallery/foodone.webp",
    name: "Salad Caesar (187 Kkal)",
    price: 35,
  },
  {
    src: "/images/Gallery/foodtwo.webp",
    name: "Salad Natal (118 Kkal)",
    price: 17,
  },
  {
    src: "/images/Gallery/foodthree.webp",
    name: "Jamur tumis dengan mangkuk labu (238 kkal)",
    price: 45,
  },
  {
    src: "/images/Gallery/foodfour.webp",
    name: "Pizza BBQ Chicken Feast (272 kkal)",
    price: 27,
  },
];

const FullMenuData: FullMenuType[] = [
  {
    name: "Salmon Panggang",
    price: "Rp 95.000",
    description: "Disajikan dengan saus mentega lemon dan sayuran panggang.",
  },
  {
    name: "Salad Caesar",
    price: "Rp 55.000",
    description: "Romaine renyah dengan parmesan, crouton, dan saus Caesar.",
  },
  {
    name: "Pizza Margherita",
    price: "Rp 75.000",
    description: "Pizza klasik dengan tomat, mozzarella, dan basil segar.",
  },
  {
    name: "Sup Tomat Basil",
    price: "Rp 40.000",
    description:
      "Sup tomat krimi dengan sentuhan bawang putih dan basil segar.",
  },
  {
    name: "Kue Cokelat Lava",
    price: "Rp 45.000",
    description:
      "Kue cokelat hangat dengan pusat meleleh disajikan dengan es krim vanila.",
  },
  {
    name: "Spaghetti Carbonara",
    price: "Rp 85.000",
    description:
      "Spaghetti dicampur telur, pancetta, parmesan, dan lada hitam.",
  },
  {
    name: "Tiramisu",
    price: "Rp 50.000",
    description:
      "Lapisan biskuit yang direndam espresso dengan mascarpone dan kakao.",
  },
];

const FooterLinkData: FooterLinkType[] = [
  {
    section: "Perusahaan",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "/#aboutus" },
      { label: "Menu", href: "/#menu" },
      { label: "Pesan Meja", href: "/#reserve" },
    ],
  },
  {
    section: "Dukungan",
    links: [
      { label: "Bantuan/FAQ", href: "/" },
      { label: "Press", href: "/" },
      { label: "Afiliasi", href: "/" },
      { label: "Pemilik hotel", href: "/" },
      { label: "Mitra", href: "/" },
    ],
  },
];

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  });
};
