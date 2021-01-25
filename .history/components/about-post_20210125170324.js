import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Image } from './Image/Image';

export default function AboutPost({
  coverImage,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around xl:justify-evenly mb-8 md:mb-16 mt-10">
        <Image 
          alt="profile"
          src="favicon/profile.png"
          webpSrc="favicon/profile.png?webp"
          previewSrc="/favicon/profile.png?lqip"
          className=" max-w-4xl h-64 rounded-full mr-4 xl:w-96 xl:h-96" 
          width={300}
          height={300}
        />
        <div className="flex flex-col mt-10 max-w-3xl">
          <h3 className="font-mono mb-4 text-4xl lg:text-6xl leading-tight">
            👨🏻‍💻   정이든 (Jung E Don)
          </h3>
          <p className="font-sans text-base mb-4 lg:text-lg  sm:text-left mt-3">
            TypeScript를 이용하여 React.js와 Next.js 개발을 하고있습니다.<br />
            <br />
            몰랐던 지식을 습득하는 과정을 즐기는 프론트엔드 개발자 입니다. <br />
            UI/UX에 관심이 많아 WPO(Web Performance Optimization)에 흥미를 갖고 공부하고 있습니다. <br />
            빠른 Learning curve를 그리며 성장중인 코딩 좋아하는 평범한 컴과생입니다.<br /> 
            <div className="flex flex-col">
              <img 
                className="mt-12"
                src="favicon/commit.png"
                width={500}
                alt="commit"
              />
              <span className="text-xs text-gray-400">학기중에 외주를 받았던 터라 간간히 커밋이 되어있는 것을 볼 수 있다.</span>
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}
