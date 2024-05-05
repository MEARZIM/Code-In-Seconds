"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function DynamicTabs() {
  const tabs = [
    {
      title: "Tutorials",
      value: "Tutorials",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tutorials Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Problems",
      value: "Problems",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Problems tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Blogs",
      value: "Blogs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blogs tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Jobs",
      value: "Jobs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Jobs tab</p>
          <DummyContent />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <div className="my-2">
        <p className="text-gray-300 font-normal text-lg my-10">
        Unlock Your Potential with Our Coding Tutorials: Dive Deep, Learn Fast, and Master Every Concept. Empowering You to Excel in Your Coding Journey.
        <Image
          src="/coding.png"
          alt="dummy image"
          width="480"
          height="280"
          className="object-cover object-left-top h-[40%]  md:h-[75%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </p>
      </div>
    </>
  );
};