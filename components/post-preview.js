import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    // Post 각각
    <div className="shadow-xl hover:-translate-y-5 transform duration-500 mt-5 w-50">
      <div className="mb-5">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={550}
            width={1000}
          />
        </div>
        <div className="px-5">
          <h3 className="text-2xl lg:text-2xl xl:text-base mb-3 ">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-lg mb-4 lg:text-sm">
            <DateFormatter dateString={date} />
          </div>
        </div>
    </div>
  )
}
