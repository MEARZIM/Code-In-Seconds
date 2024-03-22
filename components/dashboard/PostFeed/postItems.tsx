import React, {
  useCallback,
  useMemo
} from 'react'
import { format } from 'date-fns';
import { AiFillLike } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { BiRepost } from 'react-icons/bi';
import { FaRegShareSquare } from 'react-icons/fa';

import { useCurrentUserThroughSessions } from '@/hooks/useCurrentUserThroughSessions';
import useUser from '@/hooks/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaRegCommentDots, FaUser } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';


interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

export const PostItems: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  console.log(data);
  const router = useRouter();

  const loginUser = useCurrentUserThroughSessions();
  const { user, isLoading } = useUser(loginUser?.id as string);

  const goToUser = useCallback(() => {
    router.push(`/api/users/profile?${user.user.id}`)
  }, [router, user?.user?.id]);

  const goToPost = useCallback(() => {
    router.push(`/api/post?${data.id}`)
  }, [router, data.id]);

  const onLike = useCallback(() => { }, [])

  const createdAt = useMemo(() => {
    if (!user?.user?.createdAt) {
      return null;
    }
    return format(new Date(user?.user?.createdAt), 'MMMM yyyy');
  }, [user?.user?.createdAt])



  return (
    <div
      // onClick={goToPost}
      className='p-1'
    >
      <div className="bg-white p-4 rounded-lg shadow max-w-xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage
              alt="Profile picture"
              src={data.user.profileImage || ""}
            />
            <AvatarFallback className="bg-sky-500">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{data.user.name}</p>
            <p className="text-xs text-gray-500 truncate">student at st.joseph institute of technology</p>
          </div>
          <Button className="text-xs" variant="outline">
            Follow +
          </Button>
        </div>
        <div className="mb-4">

          <p
            className="text-sm text-gray-800"
            dangerouslySetInnerHTML={{
              __html: data.body
            }}
          >
          </p>

        </div>
        <div className='flex justify-between text-xs'>
          <p className='hover:text-blue-500 cursor-pointer hover:underline'>
            {data.likedIds?.length || ''}
          </p>
          <p className='hover:text-blue-500 cursor-pointer hover:underline'>
            {data.comments?.length || '0'} comments
          </p>
        </div>
        <div className="flex justify-between space-x-4 ">
          <Button variant="ghost">
            <AiFillLike className="text-gray-500 pr-1" size={20} />
            Like
          </Button>
          <Button variant="ghost">
            <FaRegCommentDots className="text-gray-500 pr-1" size={20} />
            Comment
          </Button>
          <Button variant="ghost">
            <BiRepost className="text-gray-500 pr-1" size={25} />
            Repost
          </Button>
          <Button variant="ghost">
            <FaRegShareSquare className="text-gray-500 pr-1" size={20} />
            Send
          </Button>
        </div>

      </div>
    </div>
  )
}

