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
        <h1 className='text-xl font-bold'>about the conference</h1>
        <p className='py-3 l:w-1/2 w-5/6 mx-auto'>To forward our ends of creating a more accessible conference environment, the Ethics and Applied Philosophy Graduate Conference is held virtually each year.</p>
        <div className='mt-10 w-5/6 mx-auto'>
          <p className='font-bold'>Conference organizers for the 2024 conference, in no order:</p>
          <p>Nicholas Osaka</p>
          <p>Steve Muir</p>
          <p>Lilly Tran</p>
          <p>Billie Waller</p>
          <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
        </div>
        <div className='mt-10 mx-auto w-5/6'>
          <p className='font-bold'>Conference organizers for the 2023 conference, in no order:</p>
          <p>Will Wright</p>
          <p>Steve Muir</p>
          <p>Nicholas Osaka</p>
          <p>Erica Nelson</p>
          <p>Erik Bahnson</p>
          <p>Trey Irby</p>
        </div>
        <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
      </main>
    </div>
  )
}
