import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Archive — Ethics and Applied Philosophy Graduate Conference</title>
        <meta name="description" content="View past conferences programs of the Ethics and Applied Philosophy Graduate Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <p>Archive</p>
      </main>
    </div>
  )
}
