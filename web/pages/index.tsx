import Head from 'next/head'
import Link from 'next/link'
import CFP from '../components/CFP'
import Header from '../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethics and Applied Philosophy Conference</title>
        <meta name="description" content="The Ethics and Applied Philosophy Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='container w-10/12 mx-auto my-20'>
        <CFP/>
        <div className='flex justify-center my-10'>
            <Link href="https://airtable.com/appMhfPnrnHZ1HLmL/pagYPfscbZQScYyG9/form">
              <button className='bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                Go to submission portal
              </button>
            </Link>
        </div>

      </main>
    </div>
  )
}
