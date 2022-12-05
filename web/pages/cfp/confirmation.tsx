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
      <main className='container w-10/12 md:w-1/2 mx-auto my-20'>
        <p className='flex justify-center'>Thank you for your submission. Please check the email provided for a confirmation from one of the conference organizers. If you do not receive a confirmation within 24 hours, please contact Nikko Osaka (nosaka at uncc dot edu).</p>
      </main>
    </div>
  )
}
