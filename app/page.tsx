import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import Certification from "@/components/Home/Certification";
import { Metadata } from "next";
// import ContactForm from "@/components/Contact/Form";
export const metadata: Metadata = {
  title: "Kedai Rumah G23",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Certification />
      {/* <Features /> */}
      <Cook />
      {/* <Expert /> */}
      <Gallery />
      {/* <ContactForm /> */}
      <Newsletter />
    </main>
  );
}
