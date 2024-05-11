import Menu from "@/components/Blogs/Menu/Menu"
import Featured from "@/components/Blogs/Featured/Featured"
import { CategoryList } from "@/components/Blogs/CategoryList/CategoryList"
import { BlogCardList } from "@/components/Blogs/BlogCardList/BlogCardList"

interface props {
  page: number
  cat: string
}

export default function DashboardPage({ searchParams }: any) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <>
      {/* <PostForm/> */}
      <div className="bg-white text-black">
        <Featured />
        <CategoryList />
        <div className="flex flex-col md:flex-row gap-[50px]">
          <BlogCardList page={page} cat={cat} />
          <Menu />
        </div>

      </div>
    </>
  )
}

