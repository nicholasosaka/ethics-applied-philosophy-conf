import Head from 'next/head'
import Link from 'next/link'
import CFP from '../components/CFP'
import Header from '../components/Header'
import Program from '../components/Program'
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
        <Program/>
        <h1 className='text-2xl font-bold text-center py-5'>Notes and Acknowledgements</h1>
        <p className='py-2'>The Philosophical Union of UNC Charlotte is the graduate student organization of students at UNC Charlotte interested in philosophical interventions and discussion. Annually since 2018, the Philosophical Union has organized the Ethics and Applied Philosophy Graduate Conference, a home for philosophical interventions and discourse from an applied and interdisciplinary perspective.</p>
        <p className='py-2'>This conference is funded in part by the Center for Professional & Applied Ethics at the University of North Carolina at Charlotte. The Center does not necessarily endorse the beliefs or actions of this organization.</p>
        <p className='py-2'>This conference is funded in part by the Graduate & Professional Student Government (GPSG) of the University of North Carolina at Charlotte with student activity fees. The GPSG and Student Activity Fees Commision do not necessarily endorse the beliefs or actions of this organization.</p>
        <div className='flex justify-center py-10'>
          <Image src="/gpsgdisclosure.png" width={400} height={200} alt={'Funded in part by the Graduate & Professional Student Government with your student activity fees. GPSG & SAFC do not necessarily endorse the beliefs or actions of this organization.'}/>
        </div>
      </main>
    </div>
  )
}
