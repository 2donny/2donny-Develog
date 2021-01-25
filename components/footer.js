import React, { useRef } from 'react';
import Container from './container'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer () {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 clear-both">
      <Container>
        <div className="py-10 flex flex-col items-center lg:flex-row lg:justify-evenly">

          <div className="flex flex-col">
            <h3 className="text-2xl lg:text-1xl leading-tight text-center lg:text-left mb-3 lg:mb-2">
              2donny
            </h3>
              <p className=" text-xs opacity-50">© {new Date().getFullYear()} 2donny Powered by 
              <a href="https://nextjs.org/" className="text-blue-500 hover:underline"> Next.js</a> &#128293;
            </p>
          </div>

          <div className="flex flex-row items-center mt-5">
            <div>
              <Link href="https://github.com/2donny">
                <a aria-label="git">
                  <Image
                    className="cursor-pointer"
                    src="/favicon/GitHub-Mark-32px.png"
                    alt="https://github"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div>

            <div className="ml-10">
              <Link href="https://nextjs.org/">
                <a aria-label="next">
                  <Image 
                    className="cursor-pointer"
                    src="/favicon/favicon-32x32.png"
                    alt="next"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div>

            <div className="ml-10">
              <Link href="mailto:2donny@naver.com">
                <a aria-label="mail">
                  <Image
                    id="mail" 
                    className="cursor-pointer"
                    src="/favicon/mail.png"
                    alt="mail"
                    width={35}
                    height={35}
                  />
                </a>
              </Link>
            </div>
            
          </div>
        </div>
      </Container>
    </footer>
  )
};

