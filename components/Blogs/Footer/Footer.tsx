import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    (<div className="mt-10 px-4 py-5 flex flex-col lg:flex-row items-center justify-between text-gray-500">
      <div className="lg:flex lg:flex-col lg:gap-2">
        <div className="flex items-center gap-4">
          <Image
            src="/icon.png"
            alt="logo"
            width={50}
            height={50}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <h1 className="text-2xl font-bold text-blue-500">Code in Seconds</h1>
        </div>
        <p className="font-light mx-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="flex justify-center md:justify-start gap-4 m-4">
          <FaFacebook size={18} color="blue" />
          <AiFillInstagram size={18} className="text" />
          <FaYoutube size={18} color="red" />
        </div>
      </div>
      <div className="flex lg:flex-row gap-8 lg:gap-14">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-blue-500">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/Blogs">Blog</Link>
          <Link href="/Tutorials">Tutorials</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-blue-500">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>)
  );
};


