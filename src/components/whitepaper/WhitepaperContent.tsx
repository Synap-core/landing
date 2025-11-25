'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { YStack, Text, H1, H2, H3, Paragraph } from 'tamagui'

interface WhitepaperContentProps {
  content: string
}

export function WhitepaperContent({ content }: WhitepaperContentProps) {
  return (
    <YStack 
      maxWidth={800} 
      marginHorizontal="auto" 
      padding="$6"
      gap="$4"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <H1 
              color="#fff" 
              fontSize={48} 
              fontWeight="800" 
              marginTop="$8" 
              marginBottom="$6"
              lineHeight={56}
              {...(props as any)}
            />
          ),
          h2: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <H2 
              color="#fff" 
              fontSize={36} 
              fontWeight="700" 
              marginTop="$8" 
              marginBottom="$5"
              lineHeight={44}
              {...(props as any)}
            />
          ),
          h3: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <H3 
              color="#fff" 
              fontSize={24} 
              fontWeight="600" 
              marginTop="$6" 
              marginBottom="$4"
              lineHeight={32}
              {...(props as any)}
            />
          ),
          p: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <Paragraph 
              color="rgba(255,255,255,0.85)" 
              fontSize={17} 
              lineHeight={28} 
              marginBottom="$4"
              {...(props as any)}
            />
          ),
          ul: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <ul
              style={{
                paddingLeft: 24,
                marginBottom: 20,
                color: 'rgba(255,255,255,0.85)',
              }}
              {...props}
            />
          ),
          ol: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <ol
              style={{
                paddingLeft: 24,
                marginBottom: 20,
                color: 'rgba(255,255,255,0.85)',
              }}
              {...props}
            />
          ),
          li: ({ node, dangerouslySetInnerHTML, ...props }) => (
            <li
              style={{
                marginBottom: 8,
                lineHeight: 1.7,
              }}
              {...props}
            />
          ),
          code: ({ node, inline, className, children, dangerouslySetInnerHTML, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div style={{ marginBottom: 24, borderRadius: 8, overflow: 'hidden' }}>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code 
                style={{ 
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#10B981',
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontSize: 14,
                  fontFamily: 'monospace'
                }}
                {...props}
              >
                {children}
              </code>
            )
          },
          blockquote: ({ node, ...props }) => (
            <blockquote 
              style={{ 
                borderLeft: '4px solid #10B981', 
                paddingLeft: 16,
                marginLeft: 0,
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic',
                marginBottom: 16
              }}
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div style={{ overflowX: 'auto', marginBottom: 40, marginTop: 40 }}>
              <table 
                style={{ 
                  borderCollapse: 'separate',
                  borderSpacing: '0 12px',  // Vertical space between rows
                  width: '100%',
                  border: 'none'
                }}
                {...props} 
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th 
              style={{ 
                padding: '20px 24px',  // More padding
                backgroundColor: 'rgba(16, 185, 129, 0.12)',  // Subtle emerald
                color: '#10B981',
                fontWeight: 700,
                textAlign: 'left',
                fontSize: 16,
                borderRadius: '8px 8px 0 0',
                border: 'none'
              }}
              {...props} 
            />
          ),
          td: ({ node, ...props }) => (
            <td 
              style={{ 
                padding: '20px 24px',  // More padding
                color: 'rgba(255,255,255,0.9)',  // Better contrast
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '0 0 8px 8px',
                fontSize: 15,
                lineHeight: 1.8,  // More breathing room
                verticalAlign: 'top',
                border: 'none'
              }}
              {...props} 
            />
          ),
          hr: ({ node, ...props }) => (
            <hr 
              style={{ 
                border: 'none',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: 32,
                marginBottom: 32
              }}
              {...props} 
            />
          ),
          a: ({ node, ...props }) => (
            <a 
              style={{ 
                color: '#10B981',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(16, 185, 129, 0.3)'
              }}
              target="_blank"
              rel="noopener noreferrer"
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </YStack>
  )
}
