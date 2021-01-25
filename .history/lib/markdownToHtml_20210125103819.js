import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';
import showdown from 'showdown';

export default async function markdownToHtml(markdown) {
  const cov
  const result = await remark().use(html).use(prism).process(markdown);
  return result.toString()
}r
