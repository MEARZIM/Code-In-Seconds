import Link from "next/link";
import Image from "next/image";

interface BlogCard {
    key: string
    item: any
}


export const BlogCard = ({ key, item } : BlogCard) => {
  return (
    <div className="mb-10 flex items-center lg:gap-16">
      {item.img && (
        <div className="flex-1 h-48 lg:h-auto relative">
          <Image src={item.img} alt="" layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="flex-1 mt-4 lg:mt-0">
        <div className="flex items-center mb-2">
          <span className="text-gray-500">{item.createdAt.substring(0, 10)} - </span>
          <span className="text-crimson font-semibold">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-xl lg:text-2xl font-semibold mb-2">{item.title}</h1>
        </Link>
        <p className="text-base font-light text-gray-600" dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }} />
        <Link href={`/posts/${item.slug}`} className="text-crimson border-b border-crimson inline-block mt-2">
          Read More
        </Link>
      </div>
    </div>
  );
};


