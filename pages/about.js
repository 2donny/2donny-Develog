import Intro from '../components/intro';
import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import AboutPost from '../components/about-post';

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About me </title>
            </Head>
            <Container>
                <Intro />
                <AboutPost 
                    
                />
            </Container>
        </Layout>
    )
}