import Link from 'next/link';
import React from 'react';

const LeftNav = () => {
    return (
        <div className="fixed z-10 top-1/4 invisible xl:visible sm:invisible border-2 border-gray-300 inline-block text-center px-5 py-5 h-66">
            <ul className="items-center">
                <Link href="/">
                    <li className=" cursor-pointer">
                        <p className="text-lg inline-block hover:text-gray-300">개발 공부</p>
                    </li>
                </Link>
                <Link href="/">
                    <li className=" cursor-pointer">
                    <p className="inline-block hover:text-gray-300">CS</p>
                    </li>
                </Link>
                <Link href="/">
                    <li className=" cursor-pointer">
                    <p className="text-lg inline-bloc hover:text-gray-300">PS</p>
                    </li>
                </Link>
                <Link href="/">
                    <li className=" cursor-pointer">
                    <p className="text-xl  inline-block hover:text-gray-300">Next.js</p>
                    </li>
                </Link>
                <Link href="/">
                    <li className=" cursor-pointer">
                    <p className="text-xl  inline-block hover:text-gray-300">React</p>
                    </li>
                </Link>
                <Link href="/">
                    <li className=" cursor-pointer">
                    <p className="text-xl  inline-block hover:text-gray-300">React Native</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}


export default LeftNav;