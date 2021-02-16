import { Image } from './Image/Image';

export default function AboutPost() {
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around xl:justify-evenly mb-8 md:mb-16 mt-10">
        <aside className="flex flex-col items-center">
          <Image 
            alt="profile"
            src="favicon/profile.png"
            webpSrc="favicon/profile.png?webp"
            previewSrc="/favicon/profile.png?lqip"
            className="rounded-full xl:w-96 xl:h-96" 
            width={350}
            height={350}
          />
          <h1 className=" font-mono text-3xl mb-2 text-center">정이든(2donny)</h1>
        </aside>

        <div className="flex flex-col ml-5 mt-5 max-w-3xl">
          <section>
            {/* Intro */}
            <article>
              <h1 className=" text-3xl mb-2">Introduction</h1>
              <div className=" border-b-2 mb-5"></div>
              <ul className="text-base lg:text-lg sm:text-left leading-loose ">
                <li>TypeScript를 이용하여 React.js와 Next.js 개발을 하고있습니다.</li>
                <li>정적 타이핑, 유닛 테스트를 통해 내가 작성한 코드가 안전하게 실행되도록 합니다.</li>
                <li>컨텐츠의 특성에 따라 클라이언트 사이드 렌더링과, 서버 사이드 렌더링 중 선택하여 개발합니다. </li>
                <li>UI/UX에 관심이 많아 WPO(Web Performance Optimization)에 흥미가 있습니다.</li>
              </ul>
              <p className="font-sans text-base mb-4 lg:text-lg  sm:text-left">
                
                
              </p>
            </article>
            {/* PL */}
            <article className="my-10">
              <h1 className=" text-2xl mb-2">Programming language</h1>
              <div className=" border-b-2 mb-5"></div>
              <div className="flex flex-row">
                <a href="https://www.learn-c.org/" className="hover:bg-gray-300 my-0.5 mx-0.5">
                    <img alt="c" src="c.png"/>
                </a> 
                <a href="https://www.learncpp.com/" className="hover:bg-gray-300 my-0.5 mx-0.5">
                    <img alt="c++" src="c++.png" />
                </a>
                <a href="https://www.python.org/" className="hover:bg-gray-300 my-0.5 mx-0.5">
                    <img alt="python" src="python.png" />
                </a>
                <a href="https://ocaml.org/" className="hover:bg-gray-300 my-0.5 mx-0.5">
                    <img alt="ocaml" src="ocaml.png"/>
                </a> 
              </div>
            </article>

            {/* Development */}
            <article className="my-10">
              <h1 className=" text-2xl mb-2">Web development</h1>
              <div className=" border-b-2 mb-5"></div>
              <div className="flex flex-row mt-7 flex-wrap">
                  <a href="https://webpack.js.org/">
                      <img alt="webpack" src="webpack.png"/>
                  </a> 
                  <a href="https://babeljs.io/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="babel" src="https://raw.githubusercontent.com/github/explore/cb39e2385dfcec8a661d01bfacff6b1e33bbaa9d/topics/babel/babel.png" />
                  </a>
                  <a href="https://aws.amazon.com" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="aws" src="https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png" />
                  </a>
                  <a href="https://eslint.org/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="eslint" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png" />
                  </a>  
                  <a href="https://reactjs.org/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="react" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                  </a>
                  <a href="https://nextjs.org" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="nextjs" src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" />
                  </a>   
                  <a href="https://www.typescriptlang.org/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="typescript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="javascript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                  </a>  
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="html" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                  </a> 
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="css3" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                  </a>
                  <a href="https://jestjs.io/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="jest" src="jest.png" />
                  </a>
                  <a href="https://nodejs.org/en/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="nodejs" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                  </a> 
                  <a href="https://expressjs.com/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="express" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
                  </a> 
                  <a href="https://www.mysql.com/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="mysql" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
                  </a> 
                  <a href="https://www.postgresql.org/" className="hover:bg-gray-300 my-0.5 mx-1">
                      <img alt="postgres" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" />
                  </a> 
                </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  )
}
