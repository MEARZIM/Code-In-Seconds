"use client"
import React from "react";
import Image from "next/image";

import { useCurrentUserThroughSessions } from "@/hooks/useCurrentUserThroughSessions";

const Featured = () => {
  const user = useCurrentUserThroughSessions();

  return (
    <div className="mt-10">
      <h1 className="text-6xl font-light mb-8">
        <b>Hey, {user?.name} !</b> Discover stories and creative ideas.
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:gap-16">
        <div className="lg:flex-1 lg:h-96 relative">
          <Image src="/culture.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="lg:flex-1 mt-8 lg:mt-0">
          <h1 className="text-3xl font-semibold mb-4">
          Stay Ahead of the Curve: Delve into Our Tech Blogs for the Latest Trends.
          </h1>
          <p className="text-lg font-light mb-4">
          Our Tech Blogs section is a treasure trove of insights, offering a 
          rich tapestry of articles that delve into the heart of technology. 
          Here, users can discover a wealth of knowledge, from the latest industry 
          trends to expert analyses and practical tips.

          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Featured;
