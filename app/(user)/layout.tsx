import '../../styles/global.css'
import Head from './head'
import { Footer, Navbar } from '../../components'
import Providers from './providers'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <Head />
      <body>
        <Providers session={session}>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>
            <div className='main-container'>{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
