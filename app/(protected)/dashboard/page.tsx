import { PostSection } from "@/components/dashboard/CreatePost/postSection"
import { Header } from "@/components/dashboard/Header"
import PostForm from "@/components/dashboard/CreatePost/postForm"
import PostFeed from "@/components/dashboard/PostFeed/postFeed"

export default function DashboardPage() {
  return (
    <>
      {/* <PostForm/> */}
      <PostSection/>
      <PostFeed />
    </>
  )
}

