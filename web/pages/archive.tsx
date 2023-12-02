import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Archive — Ethics and Applied Philosophy Graduate Conference</title>
        <meta name="description" content="View past conferences programs of the Ethics and Applied Philosophy Graduate Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='py-5 text-jet text-center'>
        <p className='font-bold'>2023</p>
        <li className='underline'><Link href="/archive/2023">Fifth Annual Ethics and Applied Philosophy Graduate Conference</Link></li>
      </main>
    </div>
  )
}
