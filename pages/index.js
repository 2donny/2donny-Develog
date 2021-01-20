import Container from '../components/container'
import MyPosts from '../components/MyPosts'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import LeftNav from '../components/LeftNav';

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title> 2donny's Develog</title>
        </Head>

        <div className="relative">
          <Container>
            <Intro />
            <LeftNav />
            <MyPosts posts={allPosts} />
          </Container>
        </div>
      </Layout>
    </>
  )
} 

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
