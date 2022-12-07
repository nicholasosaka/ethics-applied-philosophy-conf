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
      <main className='py-5 text-jet text-center'>
        <h1 className='text-xl font-bold'>about the 2023 conference</h1>
        <p className='py-3'>The conference will be held virtually this year to create a more accessible environment.</p>
        <p>Conference organizers for the 2023 conference, in no order:</p>
        <p>Will Wright</p>
        <p>Steve Muir</p>
        <p>Nicholas Osaka</p>
        <p>Erica Nelson</p>
        <p>Erik Bahnson</p>
        <p>Trey Irby</p>
        <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
      </main>
    </div>
  )
}
