import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./component/Home/HomeCoverSection";
import FeaturedPosts from "./component/Home/FeaturedPosts";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
    </main>
  );
}
