import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown/with-html';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <article>
        <ReactMarkdown escapeHtml={false}  />
      </article>
    </div>
  )
}

{/* <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}