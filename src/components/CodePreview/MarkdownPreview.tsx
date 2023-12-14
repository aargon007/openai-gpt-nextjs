import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, a11yDark, dracula, prism, } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

SyntaxHighlighter.supportedLanguages;

interface MarkdownPreviewProps {
    markdownContent: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
    markdownContent,
}) => {
    // Function to detect code blocks enclosed within triple backticks
    const renderCodeBlock = (props: any) => {
        const { language, value } = props;
        return (
            <SyntaxHighlighter language={language} style={materialDark}>
                {value}
            </SyntaxHighlighter>
        );
    };

    return (
        <div className="markdown w-full" style={{ wordWrap: "break-word" }}>
            <ReactMarkdown
                remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
                rehypePlugins={[rehypeRaw]}
                components={{

                    // Map `h1` (`# heading`) to use `h2`s.
                    h1: 'h2',
                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                    em(props) {
                        const { node, ...rest } = props
                        return <i style={{ color: 'red' }} {...rest} />
                    },

                    code: ({ node, className, children, ...props }) => {
                        // console.log(node);

                        if (className && className.startsWith('language-')) {
                            const language = className.replace('language-', '');
                            return renderCodeBlock({ language, value: String(children).replace(/\n$/, '') });
                        }
                        return <code {...props}>{children}</code>;
                    },
                }}
            >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownPreview;