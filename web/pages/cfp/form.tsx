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
      <main className='my-20'>
        <h1 className='text-3xl font-extrabold flex justify-center mb-10 text-jet'>Submission Portal</h1>
        <p className='text-jet flex justify-center w-10/12 mx-auto'>If there is an accessibility issue prohibiting your submission, please contact Brit Daivs (bdavi182 at uncc dot edu)</p>
        <p className='text-jet flex justify-center mb-10 w-10/12 mx-auto'>If there is a technical issue prohibiting your submission, please contact Brit Davis (bdavi182 at uncc dot edu)</p>
        <Form/>
      </main>
    </div>
  )
}
