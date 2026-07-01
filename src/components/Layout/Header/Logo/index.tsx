import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/utils/imagePath";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={imagePath("/images/Logo/cropped_circle_image.png")}
        alt="logo"
        width={100}
        height={100}
        className="w-[90px] h-[90px]  "
        quality={100}
      />
      <p className="text-black text-2xl font-semibold ">Kedai Rumah G23</p>
    </Link>
  );
};

export default Logo;
