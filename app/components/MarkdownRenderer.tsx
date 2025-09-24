'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FileText, AlertCircle } from 'lucide-react';

interface MarkdownRendererProps {
  fileName: string;
}

export default function MarkdownRenderer({ fileName }: MarkdownRendererProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/docs/${fileName}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch document: ${response.statusText}`);
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load document');
      } finally {
        setLoading(false);
      }
    }

    fetchMarkdown();
  }, [fileName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
          <div className="animate-spin">
            <FileText size={24} />
          </div>
          <span className="text-lg">Loading document...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Error Loading Document
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
      <div className="prose prose-lg max-w-none mobile-optimized-text overflow-hidden">
        <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          // Custom heading renderer with Medium-like styling
          h1: ({ children, ...props }) => (
            <h1
              {...props}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-0 mb-4 sm:mb-6 leading-tight"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              {...props}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mt-8 sm:mt-12 mb-3 sm:mb-4 leading-tight"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              {...props}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-2 sm:mb-3 leading-tight"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              {...props}
              className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2"
            >
              {children}
            </h4>
          ),
          h5: ({ children, ...props }) => (
            <h5
              {...props}
              className="text-base font-semibold text-gray-900 dark:text-white mt-4 mb-2"
            >
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6
              {...props}
              className="text-sm font-semibold text-gray-900 dark:text-white mt-4 mb-2"
            >
              {children}
            </h6>
          ),
          // Paragraph styling - Mobile-friendly
          p: ({ children, ...props }) => (
            <p
              {...props}
              className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </p>
          ),
          // List styling - Mobile-friendly
          ul: ({ children, ...props }) => (
            <ul
              {...props}
              className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 pl-4 sm:pl-5 leading-relaxed space-y-1 sm:space-y-2 list-disc list-outside"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol
              {...props}
              className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 pl-4 sm:pl-5 leading-relaxed space-y-1 sm:space-y-2 list-decimal list-outside"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li
              {...props}
              className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            >
              {children}
            </li>
          ),
          // Table styling - Mobile-friendly with overflow fix
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-4 sm:mb-6 -mx-3 sm:mx-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <table
                {...props}
                className="w-full border-collapse border border-gray-300 min-w-full text-xs sm:text-sm"
                style={{ minWidth: '100%' }}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead
              {...props}
              className="bg-gray-50"
            >
              {children}
            </thead>
          ),
          th: ({ children, ...props }) => (
            <th
              {...props}
              className="border border-gray-300 px-1 sm:px-4 py-2 text-left font-semibold text-gray-900 text-xs sm:text-sm"
              style={{
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                minWidth: '60px',
                maxWidth: '200px'
              }}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              {...props}
              className="border border-gray-300 px-1 sm:px-4 py-2 text-gray-700 text-xs sm:text-sm"
              style={{
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                minWidth: '60px',
                maxWidth: '200px'
              }}
            >
              {children}
            </td>
          ),
          // Code styling
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';

            if (!inline && language) {
              return (
                <div className="mb-4 sm:mb-6 -mx-3 sm:mx-0 overflow-x-auto">
                  <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    className="rounded-lg overflow-x-auto text-xs sm:text-sm"
                    customStyle={{
                      fontSize: 'inherit',
                      padding: '12px 8px',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                    wrapLongLines={true}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code
                {...props}
                className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-xs sm:text-sm font-mono break-all"
                style={{
                  wordBreak: 'break-all',
                  overflowWrap: 'break-word',
                  maxWidth: '100%'
                }}
              >
                {children}
              </code>
            );
          },
          // Blockquote styling - Mobile-friendly
          blockquote: ({ children, ...props }) => (
            <blockquote
              {...props}
              className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 my-4 sm:my-6 bg-blue-50 text-gray-700 italic text-sm sm:text-base lg:text-lg"
            >
              {children}
            </blockquote>
          ),
          // Horizontal rule
          hr: ({ ...props }) => (
            <hr
              {...props}
              className="my-6 sm:my-8 border-gray-300"
            />
          ),
          // Links
          a: ({ children, href, ...props }) => (
            <a
              {...props}
              href={href}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          // Strong/Bold text
          strong: ({ children, ...props }) => (
            <strong
              {...props}
              className="font-bold text-gray-900 dark:text-white"
            >
              {children}
            </strong>
          ),
          // Emphasis/Italic text
          em: ({ children, ...props }) => (
            <em
              {...props}
              className="italic text-gray-800 dark:text-gray-200"
            >
              {children}
            </em>
          )
        }}
      >
        {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
