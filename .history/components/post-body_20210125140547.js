import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <article>
        <ReactMarkdown 
          className="mb-4 prose lg:prose-lg dark:prose-dark"
          escapeHtml={false} 
          source={content} 
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
    </div>
  )
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
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
