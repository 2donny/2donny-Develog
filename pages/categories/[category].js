import Container from '../../components/container'
import MyPosts from '../../components/MyPosts'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import LeftNav from '../../components/LeftNav';

export default function category({ filteredPosts }) {
  console.log(filteredPosts);
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

export async function getStaticProps({ params }) {  // params.category는 오직 하나
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'category'
  ]);

  const filteredPosts = allPosts.filter(post => {
    return post.category.includes(params.category)
  });

  return {
    props: { filteredPosts }
  }
}

export async function getStaticPaths() {
    const posts = ["개발-공부", "CS", "PS", "Next", "React", "React-Native", "기타"];
    return {
        paths: posts.map(post => {
          return {
            params: {
              category: post
            }
          }
        }),
        fallback: false,
    }
}
