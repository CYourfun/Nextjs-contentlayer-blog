"use client";
import React from "react";
import { useForm } from "react-hook-form"; /*from react-hook-form API*/
import { GithubIcon, LinkedinIcon, Xicon, YoutubeIcon } from "../Header/Icons";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Feel to be Loved | Learning | Life
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Alaways exploring , always be humble&confident ,always keep
        learning,love all the people who love you.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 
      rounded mx-4"
      >
        <input
          type="email"
          placeholder="enter your email"
          {...register("email", { required: true })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
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
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light" />
        </a>
        <a
          href="https://www.youtube.com/"
          className="inline-block w-8 h-7 wr-4"
        >
          <YoutubeIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div
        className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row
      items-center justify-between"
      >
        <span className="text-center">
          &copy; 2025 Dylan All rights reserved.
        </span>

        <Link href="/sitemap.xml" className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://www.bilibili.com" className="underline">
            Dylan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
