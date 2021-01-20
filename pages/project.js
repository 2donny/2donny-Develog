import Intro from '../components/intro';
import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function project() {
    return (
        <Layout>
            <Head>
                <title>Project what I did </title>
            </Head>
            <Container>
                <Intro />
                <div>Project 페이지 입니다.</div>
            </Container>
        </Layout>
    )
}