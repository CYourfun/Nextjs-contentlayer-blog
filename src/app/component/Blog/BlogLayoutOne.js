import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
        "
      />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-3xl -z-10"
      />
      <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
        <Tag link={"/categories/${blog.tags[0]}"} name={blog.tags[0]} />
        <Link href={blog.url} className="mt-6">
          <h1 className="front-bold capitalize text-4xl">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
