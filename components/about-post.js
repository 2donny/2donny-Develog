import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function AboutPost({
  coverImage,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around xl:justify-evenly mb-8 md:mb-16 mt-10">
        <Avatar picture="favicon/profile.png" />
        <div className="flex flex-col mt-10 max-w-3xl">
          <h3 className="font-mono mb-4 text-4xl lg:text-6xl leading-tight">
            👨🏻‍💻   정이든 (Jung Edon)
          </h3>
          <p className="font-sans text-base leading-relaxed mb-4 lg:text-lg 2xl:text-text-lg sm:text-left">
            모르는 지식을 습득하는 과정을 즐기는 프론트엔드 개발자 입니다. <br />
            관심있는 분야는 Web이고 WPO(Web Performance Optimization)에 흥미를 느끼며 공부하고 있습니다. <br />
            <br />
            빠른 Learning curve를 그리며 성장하고있는 코딩 좋아하는 평범한 컴과생입니다.<br /> 
            <p className="text-indigo-600 text-opacity-90">
              TypeScript를 사용하여 React.js와 Next.js 개발을 하고있습니다.
            </p>
            
          </p>
        </div>
      </div>
    </section>
  )
}
