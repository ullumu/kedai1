import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/images/Logo/Logo-kedaig23.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-[100px] h-[100px]  "
        quality={100}
      />
      <p className="text-black text-2xl font-semibold ">Kedai Rumah G23</p>
    </Link>
  );
};

export default Logo;
