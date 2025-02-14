import Head from 'next/head'
import Link from 'next/link'
import CFP from './CFP'
import Header from './Header'
import Image from 'next/image'

export default function Home() {
  return (
  <main className='mx-auto my-5'>
      <div className='text-center mb-10 flex xl:flex-row flex-col xl:gap-x-32 lg:w-2/3 lg:mx-auto'>
        <div>
          <h2 className='text-5xl font-bold uppercase my-5 xl:my-0 text-left'>Ethics in a Changing World</h2>
        </div>
        <div className='text-left flex flex-row'>
          <div className="inline-block h-50 xl:w-6 self-stretch opacity-100 bg-jet xl:mr-8 xl:mt-1"></div>
          <div className=''>
            <h2 className='text-xl font-normal'>7<sup>th</sup> Annual Ethics and Applied Philosophy Graduate Conference hosted by the Philosophical Union of the University of North Carolina at Charlotte</h2>
            <h2 className='text-xl font-normal pt-4'>April 25 - 26, 2025, virtually</h2>
            <h3 className='text-lg font-bold pt-4'>Keynote speakers:</h3>
            <div className='text-lg font-normal'>
              <h4>Amelia Wiercioch, M.A., University of North Carolina Charlotte Alumna Speaker</h4>
              <h4>Dr. Evie Kendal, Swinburne University of Technology</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center py-5'>
        <h1 className='text-3xl font-bold pb-2'>Zoom Information</h1>
        <Link className='underline underline-offset-4' href={'https://charlotte-edu.zoom.us/j/95627127695'}>https://charlotte-edu.zoom.us/j/94641893355?pwd=mhMiBRVcIujaG6PGS0ddvVu3ujCJsg.1</Link>
        <p className='pt-2'>You will need to log into a Zoom account to join. If you are affilitated with UNC Charlotte, please use your university Zoom account.</p>
      </div>

      <div className='py-5'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Program</h1>
          <p className='underline'>Note: all times are in Eastern Daylight Time (GMT-4) (UTC-5).</p>
        </div>

        <div className='py-5'>
          <h1 className='text-3xl font-bold pb-2'>Day 1 Schedule (April 25)</h1>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Opening Remarks (1:00pm - 1:30pm)</h2>
            <div className='pl-10'>
              <p>Opening remarks delivered by Philosophical Union of UNC Charlotte President</p>
              <p>Brit Davis</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Alumna Keynote (1:35pm - 2:55pm) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Keynote: Amelia Wiercioch, M.A. PhD Student @ University of Central Florida.</p>
              <p>Moderator: TBA</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel A (3:00pm - 4:45pm ET) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Moderator: TBA</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel B (4:50pm - 6:20pm ET) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Moderator: TBA</p>
            </div>
          </div>

        </div>

        <div className='py-5'>
          <h1 className='text-3xl font-bold pb-2'>Day 2 Schedule (April 26)</h1>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Saturday Open (10:45am - 11:00am ET)</h2>
            <div className='pl-10'>
              <p>Saturday Open will consist of coffee chat and technical check.</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel C (11:00am - 12:30pm ET) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Moderator: TBA</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel D (1:20pm - 2:50pm ET) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Speaker: TBA: <q>TBA</q></p>
              <p>Moderator: TBA</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Established Scholar Keynote (TBA) — <i>TBA</i></h2>
            <div className='pl-10'>
              <p>Keynote: Dr, Evie Kendal. Senior Lecturer, Swinburne University of Technology.</p>
              <p>Moderator: TBA</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Social/Networking Hour (TBA)</h2>
          </div>

        </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Closing Remarks (TBA)</h2>
            <div className='pl-10'>
              <p>Closing remarks delivered by Philosophical Union of UNC Charlotte Presidents</p>
              <p>Brit Davis</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Speaker Information</h1>
        </div>

      </div>
  </main>
  )
}
