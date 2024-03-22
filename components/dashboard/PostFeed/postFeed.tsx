"use client"
import { Skeleton } from "@/components/ui/skeleton"
import usePosts from '@/hooks/usePosts';

import { PostItems } from './postItems';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  // console.log({ userId });
  const { post, isLoading } = usePosts(userId);

  if (isLoading) {
    return (
      <div className="m-5">
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[100px] w-full bg-slate-200 rounded-xl" />
          <Skeleton className="h-[100px] w-full bg-slate-200 rounded-xl" />
          <Skeleton className="h-[100px] w-full bg-slate-200 rounded-xl" />
        </div>
      </div>
    )
  }

  return (
    <>
      {post.map((post: Record<string, any>,) => (
        <PostItems userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;