import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className="max-w-2xl mx-auto py-">
      {/* 포스트 제목  */}
      <PostTitle>{title}</PostTitle>

      {/* 날짜 */}
      <div className="mb-6 text-sm text-opacity-50 text-gray-400">
        최종  수정일 <DateFormatter dateString={date} />
      </div>

      {/* 커버 이미지 */}
      <div className="mb-8 sm:mx-0 md:mb-16 ">
        <CoverImage title={title} src={coverImage} height={600} width={1000} />
      </div>
    </div>
  )
}
