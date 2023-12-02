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
        <div className='py-3 lg:w-1/2 w-5/6 mx-auto text-left'>
          <p>The conference has been held annually since 2018 (with the exception of 2019) and is entirely student organized through our graduate student organization, the Philosophical Union of UNC Charlotte. From the inaugural meeting, the conference has been oriented towards being responsive to the crises of our world. It is the position of the Philosophical Union of UNC Charlotte that philosophy is at its most fruitful when done from the margins; that philosophy ought to be a practice to conceptualize injustice.</p>
          <p className='pt-2'>To forward our ends of creating a more accessible conference environment, the Ethics and Applied Philosophy Graduate Conference is held virtually each year since 2020.</p>
        </div>
        <div className='mb-10'>
          <div className='mt-10 w-5/6 mx-auto'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2024</p>
              <p className='font-bold'>Annual Ethics and Applied Philosophy Graduate Conference - Praxis as First Philosophy</p>
            </div>
            <p className=''>Conference organizers for the 2024 conference, in no order:</p>
            <p>Nicholas Osaka</p>
            <p>Steve Muir</p>
            <p>Lilly Tran</p>
            <p>Billie Waller</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>
          <div className='mt-10 mx-auto w-5/6'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2023</p>
              <p className='font-bold'>Annual Ethics and Applied Philosophy Graduate Conference</p>
            </div>
            <p className=''>Conference organizers for the 2023 conference, in no order:</p>
            <p>Will Wright</p>
            <p>Steve Muir</p>
            <p>Nicholas Osaka</p>
            <p>Erica Nelson</p>
            <p>Erik Bahnson</p>
            <p>Trey Irby</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>
          <div className='mt-10 mx-auto w-5/6'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2022</p>
              <p className='font-bold'>Annual Ethics and Applied Philosophy Graduate Conference</p>
            </div>
            <p className=''>Conference organizers for the 2022 conference, in no order:</p>
            <p>Amanda Pinto</p>
            <p>Ian Hosbach</p>
            <p>Erica Nelson</p>
            <p>Erik Bahnson</p>
            <p>Peighton Connor</p>
            <p>Trey Irby</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>
          <div className='mt-10 mx-auto w-5/6'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2021</p>
              <p className='font-bold'>Annual Ethics and Applied Philosophy Graduate Conference</p>
            </div>
            <p className=''>Conference organizers for the 2021 conference, in no order:</p>
            <p>Amanda Pinto</p>
            <p>Ian Hosbach</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>
          <div className='mt-10 mx-auto w-5/6'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2020</p>
              <p className='font-bold'>Annual Ethics and Applied Philosophy Graduate and Undergraduate Conference</p>
            </div>
            <p className=''>Conference organizers for the 2020 conference, in no order:</p>
            <p>Samuel Pierce Gordon</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>
          <div className='mt-10 mx-auto w-5/6'>
            <div className='mb-2'>
              <p className='font-bold text-xl'>2018</p>
              <p className='font-bold'>Inagural Annual Southeast Conference of Applied Philosophy - Philosophy in Urgent Times</p>
            </div>
            <p className=''>Conference organizers for the 2018 conference, in no order:</p>
            <p>Dunya Majeed</p>
            <p>Jack Leff</p>
            <p>and the rest of the Philosophical Union of UNC Charlotte.</p>
          </div>


        </div>
      </main>
    </div>
  )
}
