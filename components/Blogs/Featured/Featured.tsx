import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-10">
      <h1 className="text-6xl font-light mb-8">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:gap-16">
        <div className="lg:flex-1 lg:h-96 relative">
          <Image src="/p1.jpeg" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="lg:flex-1 mt-8 lg:mt-0">
          <h1 className="text-3xl font-semibold mb-4">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-lg font-light mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
