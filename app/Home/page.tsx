import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-cover">
        <Image
          src="/hero_image2.webp"
          width={500}
          height={500}
          alt="Hero image"
        />

        <p className="font-semibold">
          From the bottom of my heart, I am truly sorry.
        </p>

        <Link href="/Second">
          <button className="px-8 py-4 bg-pink-400 rounded-md font-medium text-[16px] text-white cursor-pointer">
            Can you please hear me out?
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
