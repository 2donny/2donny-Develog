import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts') // md 파일이 들어있는 디렉토리

export function getPostSlugs() { // 모든 Slug(id) 다 가져옴.
  return fs.readdirSync(postsDirectory) // md 디렉토리 내 모든 파일을 배열로 가져옴
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '') // => 'dynamic-routing'
  const fullPath = join(postsDirectory, `${realSlug}.md`) // ./_posts/dynamic-routing.md
  const fileContents = fs.readFileSync(fullPath, 'utf8') // 해당 md 파일을 읽는다.
  const { data, content } = matter(fileContents) // matter이 md 파일을 읽는다.
  // data = 메타 데이터, // content = 본문

  const items = {}
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug // ex) {slug: dynamic-routing}
    }
    if (field === 'content') { // ex) {content: "md 파일 내 content들"}
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field] // ex) {title: 'Dynamic Routing and Static Generation'}
    }
  })

  return items
}

export function getAllPosts(fields = []) { // fields = ['slug']
  const slugs = getPostSlugs() // _posts 내 파일배열
  const posts = slugs  // ['dynamic-routing', 'hello-world.md', 'preview.md']
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))     // 최신 순을 정렬

  return posts
}
