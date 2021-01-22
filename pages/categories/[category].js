import Container from '../../components/container'
import MyPosts from '../../components/MyPosts'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import LeftNav from '../../components/LeftNav';

export default function category({ filteredPosts }) {
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
            <MyPosts posts={filteredPosts} />
          </Container>
        </div>
      </Layout>
    </>
  )
} 

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'category'
  ]);

  const filteredPosts = allPosts.filter(post => {
    return post.category === params.category
  });

  return {
    props: { filteredPosts }
  }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['category']);

    return {
        paths: posts.map(post => {
          return {
            params: {
              category: post.category
            }
          }
        }),
        fallback: false,
    }
}
