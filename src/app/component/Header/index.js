import { GithubIcon, LinkedinIcon, SunIcon, Xicon, YoutubeIcon } from "./Icons";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid boader-dark rounded-full font-medium capitalize flex items-center
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a href="" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://x.com/sniperYu888"
          className="inline-block w-6 h-6 mr-4"
        >
          <Xicon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://github.com/CYourfun"
          className="inline-block w-6 h-6 mr-4"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://www.youtube.com/"
          className="inline-block w-8 h-7 wr-4"
        >
          <YoutubeIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
