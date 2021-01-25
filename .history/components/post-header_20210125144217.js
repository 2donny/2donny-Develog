import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* 포스트 제목  */}
      <PostTitle>{title}</PostTitle>

      {/* 날짜 */}
      <div className="mb-6 text-sm text-opacity-50 text-gray-400">
        최종  수정일 <DateFormatter dateString={date} />
      </div>

      
    </div>
  )
}
