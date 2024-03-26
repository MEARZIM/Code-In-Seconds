import Menu from "@/components/Blogs/Menu/Menu"
import Featured from "@/components/Blogs/Featured/Featured"
import { CategoryList } from "@/components/Blogs/CategoryList/CategoryList"
import { BlogCardList } from "@/components/Blogs/BlogCardList/BlogCardList"

interface props {
  page: number
}

export default function DashboardPage({ searchParams }: any) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      {/* <PostForm/> */}
      <div className="bg-white text-black">
        <Featured />
        <CategoryList />
        <div className="flex flex-col md:flex-row gap-[50px]">
          <BlogCardList page={page} cat={""} />
          <Menu />
        </div>

      </div>
    </>
  )
}

