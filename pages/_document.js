import { Html, Head, Main, NextScript } from 'next/document'
import MetaChat from '@/lib/MetaChat'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <MetaChat />
      </body>
    </Html>
  )
}
