import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/SubmissionForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethics and Applied Philosophy Graduate Conference</title>
        <meta name="description" content="The Ethics and Applied Philosophy Graduate Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Form/>
      </main>
    </div>
  )
}
