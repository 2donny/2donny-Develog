import PostPreview from './post-preview'

export default function MyPosts({ posts }) {
  return (
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
        {posts.length ? (
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))
        ): (
          <h1 className="text-xl">관련 글이 없습니다.</h1>
        )}
      </div>
    </section>
  )
}
