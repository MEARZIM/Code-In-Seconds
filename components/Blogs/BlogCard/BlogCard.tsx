import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { format } from "date-fns";

interface BlogContentProps {
  id: string;
  createdAt: Date
  updatedAt: Date
  slug: string
  title: string
  desc: string
  img?: string
  views?: number
  userId: string
  user: {}
}

interface BlogCard {
  key: string
  item: BlogContentProps
}



export const BlogCard = ({ key, item }: BlogCard) => {
  
  const createdAt = useMemo(()=>{
    if (item.createdAt == null) {
      return null
    }
    return format(new Date(item.createdAt), 'MMMM yyyy');
  },[item.createdAt])

  return (
    <div className=" mx-auto p-1">
      <div className="flex flex-col py-6 md:flex-row md:items-center bg-white rounded-lg shadow-lg overflow-hidden">
        {item?.img && (
          <Image
            alt="Coastal town"
            className="h-fit w-fit md:h-auto md:w-1/2 p-2 rounded-lg"
            height="480"
            src="/culture.png"
            style={{
              aspectRatio: "480/480",
              objectFit: "cover",
            }}
            width="480"
          />

        )}
        <div className="pl-6 pr-2 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-6" dangerouslySetInnerHTML={{
              __html: item.title
            }}>
            </div>
            <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{
              __html: truncateText(item.desc, 40)
            }}>
              
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{createdAt}</p>
              <Link 
                className="text-blue-500 hover:text-red-400 hover:underline" 
                href={`Blogs/${item?.id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function truncateText(text: string, maxLength: number) {
  // Split the text into an array of words
  let words = text.split(' ');
  
  // If the number of words is less than or equal to the maxLength, return the original text
  if (words.length <= maxLength) {
    return text;
  }
  
  // Otherwise, truncate the text and append '...' at the end
  return words.slice(0, maxLength).join(' ') + '...';
}