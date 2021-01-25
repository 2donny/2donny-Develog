import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

export default function PostBody({ content }) {
  console.log('content : ', content);
  return (
    <div className="max-w-2xl mx-auto">
      <article>
        {/* <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
        <ReactMarkdown 
          escapeHtml={false} 
          source={content} 
          renderers={{code: CodeBlock}}
          />
      </article>
    </div>
  )
}

const CodeBlock = (language, value) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  )
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    webpSrc={require(`../../content/assets/${src}?webp`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);
