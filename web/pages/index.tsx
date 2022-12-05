import Head from 'next/head'
import Link from 'next/link'
import CFP from '../components/CFP'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethics and Applied Philosophy Graduate Conference</title>
        <meta name="description" content="The Ethics and Applied Philosophy Graduate Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='container w-10/12 mx-auto my-20'>
        <CFP/>
        <div className='flex justify-center my-10'>
          <Link href="/cfp/form">
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
              Go to submission portal
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
