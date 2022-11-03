import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About — Ethics and Applied Philosophy Graduate Conference</title>
        <meta name="description" content="About the Ethics and Applied Philosophy Graduate Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <p>About</p>
      </main>
    </div>
  )
}
