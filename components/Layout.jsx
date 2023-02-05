import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rroshi Store </title>
      </Head>

      <header className='main-container'>
        <Navbar />
      </header>

      <main className='main-container'>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}
export default Layout
