import Link from 'next/link';
import React from 'react';

const LeftNav = () => {
    const nav = ['개발 공부', "CS", 'PS', "Next", "React", "React Native", '기타'];
    let spaceDeletedStr = "";
    return (
        <div className="fixed z-10 top-1/4 invisible lg:visible xl:visible sm:invisible border-2 border-gray-300 inline-block text-center px-5 py-5 h-66">
            <ul className="items-center">
                {
                    nav.map((category, index) => (
                        spaceDeletedStr = category.replace(' ', '-'),
                        (
                        <Link as={`/categories/${spaceDeletedStr}`} href="/categories/[category]" key={index}>
                            <li className=" cursor-pointer">
                                <p className="my-2 text-xl inline-block hover:text-gray-300">{category}</p>
                            </li>
                        </Link>
                    )))
                }
            </ul>
        </div>
    )
}


export default LeftNav;