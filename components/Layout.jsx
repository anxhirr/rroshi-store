import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Rroshi Store </title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='main-container'>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
export default Layout
