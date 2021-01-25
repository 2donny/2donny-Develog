import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';
import showdown from 'showdown';

export default async function markdownToHtml(markdown) {
  console.log('markdown : ', markdown);
  const converter = new showdown.Converter();
  const htmla = converter.makeHtml(markdown);
  console.log("html : ", htmla);
  const result = await remark().use(html).use(prism).process(markdown);
  return result.toString()
}
