import Head from 'next/head'
import Header from '../../components/Header'
import Form from '../../components/SubmissionForm'

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
        <p className='flex justify-center'>Thank you for your submission. Please check the email provided for confirmation of submission.</p>
      </main>
    </div>
  )
}
