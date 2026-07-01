import Image from "next/image";
import { imagePath } from "@/utils/imagePath";
import { HalalCertificationData } from "@/data/data";

const Certification = () => {
  const { halalLogo, certificateNumber } = HalalCertificationData;

  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-[220px] mx-auto lg:mx-0">
            <Image
              src={imagePath(halalLogo.imageSrc)}
              alt={halalLogo.alt}
              width={220}
              height={220}
              className="mx-auto"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 px-5 py-4 text-center lg:mt-0 lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-black/60">
              {certificateNumber.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-black">
              {certificateNumber.value}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
