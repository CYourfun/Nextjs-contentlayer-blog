import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/Me.jpg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4 hover:scale-105 transition-all ease duration-200">
        <Image
          src={profileImg}
          alt="Dylan"
          className="w-full h-auto round-full"
        />
      </div>
      <span className="font-bold text-xl">Dylan</span>
    </Link>
  );
};

export default Logo;
