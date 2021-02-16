import Intro from '../components/intro';
import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function project() {
    return (
        <Layout>
            <Head>
                <title>My Resume </title>
                <meta name="description" content="정이든 프론트엔드 개발자의 이력서입니다."/>
            </Head>
            <Container>
                <Intro />
                <section className="">
                    <article className="">
                        <h1 className="text-3xl my-3 font-semibold ml-5">🏠  Organizations</h1>
                        <div className="border-t-2 border-black w-4/6 mb-5" />
                        <ul className="ml-10">
                            <li className="flex content-center">
                                <p className="ml-0">고려대학교 웹 개발 동아리 KWEB </p><sup className=" text-gray-400 top-1 ml-1">2020.3~</sup>
                            </li>
                        </ul>
                    </article>

                    <article className=" my-10">
                        <h1 className="text-3xl my-3 font-semibold  ml-5">👨🏻‍💻  Projects</h1>
                        <div className="border-t-2 border-black w-4/6 mb-5"/>
                        <ul className="ml-10">
                            <li className="flex content-center my-2">
                                <p className="ml-0">대학생 커뮤니티 연고링 </p><sup className=" text-gray-400 top-1 ml-1">2021.2~</sup>
                            </li>
                            <li className="flex content-center my-2">
                                <p className="ml-0">위치기반 플래너 하루 </p><sup className=" text-gray-400 top-1 ml-1">2021.1~</sup>
                            </li>
                            <li className="flex content-center my-2">
                                <p className="ml-0">케어링엔컴퍼니 외주</p><sup className=" text-gray-400 top-1 ml-1">2020.9~</sup>
                            </li>
                        </ul>
                    </article>
                    
                    <article className="my-10">
                        <h1 className="text-3xl my-3 font-semibold ml-5">🎓  Education</h1>
                        <div className="border-t-2 border-black w-4/6 mb-5"/>
                        <ul className="ml-10">
                            <li className="flex content-center">
                                <p className="ml-0">고려대학교 정보대학 컴퓨터학과</p><sup className=" text-gray-400 top-1 ml-1">2018.3~</sup>
                            </li>
                        </ul>
                    </article>
                    <article className="my-10">
                        <h1 className="text-3xl my-3 font-semibold ml-5">🏆 Awards</h1>
                        <div className="border-t-2 border-black w-4/6 mb-5"/>
                        <ul className="ml-10">
                            <li className="flex content-center">
                                <p>고려대학교 웹 개발 해커톤 - 베스트 개발상 </p><sup className=" text-gray-400 top-1 ml-1">2021.1.10</sup>
                            </li>
                        </ul>
                    </article>
                </section>
            </Container>
        </Layout>
    )
}