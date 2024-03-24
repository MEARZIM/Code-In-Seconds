import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuCategories from "../MenuCategories/MenuCategories";
import MenuPosts from "../MenuPost/MenuPost";


const Menu = () => {
  return (
    <div className="flex-1 mt-16">
      <h2 className="text-gray-500 text-base font-normal mb-4">What's hot</h2>
      <h1 className="text-2xl font-bold mb-6">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 text-base font-normal mb-4">Discover by topic</h2>
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 text-base font-normal mb-4">Chosen by the editor</h2>
      <h1 className="text-2xl font-bold mb-6">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
