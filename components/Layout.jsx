import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rroshi Store </title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}
export default Layout
