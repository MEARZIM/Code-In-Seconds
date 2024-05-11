"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";


export function DynamicTabs() {
  const tabs = [
    {
      title: "Tutorials",
      value: "Tutorials",
      image: '',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tutorials Tab</p>
          <FeaturedLayout Props={{
            contentText: 'Unlock Your Potential with Our Coding Tutorials: Dive Deep, Learn Fast, and Master Every Concept. Empowering You to Excel in Your Coding Journey.',
            image: "https://images.pexels.com/photos/8441775/pexels-photo-8441775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }} />
        </div>
      ),
    },
    {
      title: "Problems",
      value: "Problems",
      image: '',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Problems tab</p>
          <FeaturedLayout Props={{
            contentText: 'Conquer Coding Challenges: Sharpen Your Skills, Crack the Code, and Elevate Your Problem-Solving Prowess. Your Gateway to Mastery Starts Here.',
            image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }} />
        </div>
      ),
    },
    {
      title: "Blogs",
      value: "Blogs",
      image: '',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blogs tab</p>
          <FeaturedLayout Props={{
            contentText: 'Stay Ahead of the Curve: Delve into Our Tech Blogs for the Latest Trends, Expert Insights, and Innovation to Ignite Your Passion for Technology.',
            image: "https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }} />
        </div>
      ),
    },
    {
      title: "Jobs",
      value: "Jobs",
      image: '',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Jobs tab</p>
          <FeaturedLayout Props={{
            contentText: 'Launch Your Career: Navigate the Path to Success, Secure Your Dream Job, and Thrive in the Tech World. Let Us Guide You to Professional Achievement.',
            image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }} />
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


const FeaturedLayout = ({
  Props
}: {
  Props: {
    contentText: string,
    image: string
  }
}) => {
  return (
    <>
      <div className="my-2">
        <p className="text-gray-300 font-normal text-lg my-10">
          {Props.contentText}
          <img
            src={Props.image}
            alt="Image"
            width="480"
            height="280"
            className="object-cover object-left-top h-[40%]  md:h-[75%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </p>
      </div>
    </>
  );
};