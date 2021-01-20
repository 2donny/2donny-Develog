import PostPreview from './post-preview'

export default function MyPosts({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 lg:gap-y-10 gap-y-10  mb-32 xl:w-3/4 float-none lg:float-right xl:float-right ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
