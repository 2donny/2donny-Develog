import PostPreview from './post-preview'

export default function MyPosts({ posts }) {
  return (
    // 포스트 전체를 담는 컨테이너
    <section>
      <div 
      className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-2
      xl:grid-cols-3 
      gap-x-10
      gap-y-10  

      md:gap-x-8 
      md:gap-y-12 
      lg:gap-y-12 
      
      sm:w-full
      lg:w-3/4 
      xl:w-3/4 

      float-none 
      lg:float-right 
      xl:float-right 
      mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}
