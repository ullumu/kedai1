"use client";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/utils/imagePath";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50">
      <div className="container xl:pt-7 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16">
              Kedai Rumah G23
            </h2>
            <p className="text-black/55 text-lg font-normal mb-10 lg:text-start text-center">
              Kedai Rumah G23 adalah produsen makanan dan minuman siap saji,
              sehat, dan halal yang berbasis di Denpasar, Bali. Didirikan pada
              tahun 2019, perjalanan kami dimulai dari kecintaan terhadap dunia
              kuliner, termasuk kuliner Indonesia yang kaya akan cita rasa
              rempah. Seiring perkembangan zaman, masyarakat perkotaan yang
              dinamis dan praktis menuntut kami untuk menciptakan hidangan siap
              saji yang bisa dinikmati kapan saja, di mana saja, oleh siapa
              saja, namun tetap sehat tanpa bahan tambahan. Dengan semangat
              mewujudkan kebutuhan konsumen tersebut, kami melihat peluang besar
              produk makanan halal di pasar global, sehingga menjadi tantangan
              tersendiri untuk membuat produk kami mampu bersaing di dunia
              internasional.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
              <Link href="/#menu">
                <button className="text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300">
                  Lihat Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center relative">
            <Image
              src={imagePath("/images/hero/banner-image4.png")}
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
