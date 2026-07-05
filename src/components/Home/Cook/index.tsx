"use client";

import Image from "next/image";
import { imagePath } from "@/utils/imagePath";

const Cook = () => {
  return (
    <section className="relative" id="aboutus">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="lg:col-span-6 flex lg:justify-start justify-center">
            <Image
              src={imagePath("/images/Logo/Logo-kedaig23v2.jpg")}
              alt="nothing"
              width={636}
              height={808}
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center">
              Tentang Kami
            </p>
            <h2 className="lg:text-start text-center">
              Dibuat dengan Semangat, Disajikan dengan Bangga
            </h2>
            <p className="text-black/50 text-lg font-normal my-5 text-start">
              VISI <br /> Memperkenalkan dan mengembangkan kuliner Indonesia ke
              pasar internasional dengan mengutamakan aspek halal dan kualitas.
            </p>
            <p className="text-black/50 text-lg font-normal mb-10 text-start">
              MISI <br /> Menghasilkan hidangan siap saji yang dapat dinikmati
              oleh siapa saja, kapan saja, dan di mana saja, mulai dari
              anak-anak, lanjut usia, hingga generasi muda dan masyarakat
              perkotaan. Membungkus produk makanan tradisional Indonesia secara
              modern dengan teknologi sterilisasi sehingga memiliki umur simpan
              yang panjang dan dapat dipasarkan lebih luas ke pasar
              internasional. Memasarkan produk makanan berkualitas tinggi dan
              terjamin halal.
            </p>
            <button className="text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
