import * as MarkdownIt from 'markdown-it';
import * as katex from 'katex';
import * as highlightJs from 'highlight.js';
import * as mdFootnote from 'markdown-it-footnote';
import * as mdTex from 'markdown-it-texmath';
import * as mdAnchor from 'markdown-it-anchor';
import * as mdTableOfContents from 'markdown-it-table-of-contents';
import * as mdContainer from 'markdown-it-container';

export default async function markdownToHtml(markdown) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);
  const result = await remark().use(html).use(prism).process(markdown);
  return html;
}
