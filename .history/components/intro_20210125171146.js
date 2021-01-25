import Link from 'next/link';
import Image from 'next/image';


export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-around my-6 md:mb-5 border-b-2 md:pb-5 ">

      {/* 내 소개 */}
      <div>
        <h1 className=" text-6xl md:text-2xl tracking-tighter leading-tight md:pr-8">
          <Link href="/" className="px-2 py-2 ">
            2donny's develog
          </Link>
        </h1>
        <p className="mt-2 text-center md:text-left text-xs duration-200 text-gray-400 hover:text-gray-600">웹 성능 최적화에 관심이 많은 개발자입니다.</p>
      </div>

      {/* 네비게이션 */}
      <nav className="flex flex-row ">
        <h4 className="font-serif text-lg mt-5 pl-4 md:pl-6 hover:text-success duration-200 transition-colors">
          <Link href="/about">
            About me
          </Link>
        </h4>
        <h4 className="font-serif text-lg mt-5 pl-4 md:pl-6 hover:text-success duration-200 transition-colors">
          <Link href="/project">
            Project
          </Link>
        </h4>
        <h4 className="text-lg mt-4 pl-4 md:pl-10">
            <a href="mailto:2donny@naver.com">
              <Image 
                src="/favicon/mail.png"
                alt="mail"
                width={35}
                height={35}
              />
            </a>
        </h4>
      </nav>
      
    </section>
  )
}
