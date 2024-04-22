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
          <h2 className='text-5xl font-bold uppercase my-5 xl:my-0 text-left'>Praxis as First Philosophy</h2>
        </div>
        <div className='text-left flex flex-row'>
          <div className="inline-block h-50 xl:w-6 self-stretch opacity-100 bg-jet xl:mr-8 xl:mt-1"></div>
          <div className=''>
            <h2 className='text-xl font-normal'>6<sup>th</sup> Annual Ethics and Applied Philosophy Graduate Conference hosted by the Philosophical Union of the University of North Carolina at Charlotte</h2>
            <h2 className='text-xl font-normal pt-4'>April 26 - 28, 2024, virtually</h2>
            <h3 className='text-lg font-bold pt-4'>Keynote speakers:</h3>
            <div className='text-lg font-normal'>
              <h4>Kim Q. Hall, Appalachian State University</h4>
              <h4>Kathleen Lowenstein, Michigan State University</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center py-5'>
        <h1 className='text-3xl font-bold pb-2'>Zoom Information</h1>
        <Link className='underline underline-offset-4' href={'https://charlotte-edu.zoom.us/j/95627127695'}>https://charlotte-edu.zoom.us/j/95627127695</Link>
        <p className='pt-2'>You will need to log into a Zoom account to join. If you are affilitated with UNC Charlotte, please use your university Zoom account.</p>
      </div>

      <div className='py-5'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Program</h1>
          <p className='underline'>Note: all times are in Eastern Daylight Time (GMT-4).</p>
        </div>

        <div className='py-5'>
          <h1 className='text-3xl font-bold pb-2'>Day 1 Schedule (April 26)</h1>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Opening Remarks (1:15pm - 3:00pm ET)</h2>
            <div className='pl-10'>
              <p>Opening remarks delivered by Philosophical Union of UNC Charlotte Co-Presidents</p>
              <p>Steve Muir and Nicholas Osaka</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Established Scholar Keynote (1:30pm - 3:00pm ET) — <i>Title TBA</i></h2>
            <div className='pl-10'>
              <p>Keynote: Kim Q. Hall, PhD. Professor of Philosophy @ Appalachian State University.</p>
              <p>Moderator: Billie Waller</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel A (3:00pm - 4:45pm ET) — <i>Topics in Disability Studies</i></h2>
            <div className='pl-10'>
              <p>Speaker: Casey Doherty, <q>Reimagining Protest: Artivism in the Myalgic Encephalomyelitis (ME) Community</q></p>
              <p>Speaker: Rosalie Looijaard: <q>Against Disability Generalism: Navigating Chronic Pain Through Models of Disability</q></p>
              <p>Speaker: Kilah Tabatsky: <q>Defining Disability Through the Lens of Solidarity</q></p>
              <p>Moderator: Amanda Hassard</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel B (4:50pm - 6:20pm ET) — <i>Theorizing Action</i></h2>
            <div className='pl-10'>
              <p>Speaker: Corey McKibbin, <q>Decolonizing Time</q></p>
              <p>Speaker: Simon Francesco Di Rupo: <q>The importance of interfaith dialogue in approaching environmental ethics. Raimon Panikkar and Pope Francis in comparison</q></p>
              <p>Speaker: Scott Ryan Maybell: <q>Brandom in the Wild: Recognitive Analysis and Recollective Praxis</q></p>
              <p>Moderator: Pennda Arami</p>
            </div>
          </div>

        </div>

        <div className='py-5'>
          <h1 className='text-3xl font-bold pb-2'>Day 2 Schedule (April 27)</h1>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Saturday Open (10:45am - 11:00am ET)</h2>
            <div className='pl-10'>
              <p>Saturday Open will consist of coffee chat and technical check.</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel C (11:00am - 12:30pm ET) — <i>Specificity in Praxis</i></h2>
            <div className='pl-10'>
              <p>Speaker: Emily Lange, <q>Making Better Worlds: Worldbuilding as Feminist Theory and Practice</q></p>
              <p>Speaker: Jack R Leff: <q>On Activist Science</q></p>
              <p>Speaker: Dhritiman Barman: <q>The Shaping and Reshaping of a Legal Cannabis Market in Southwest Virginia</q></p>
              <p>Moderator: Nicholas Osaka</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel D (1:20pm - 2:50pm ET) — <i>Affect & Injustice</i></h2>
            <div className='pl-10'>
              <p>Speaker: Erica Bigelow, <q>Felt Weapons: Wielding Affect to Harm</q></p>
              <p>Speaker: Triston Hanna: <q>Degrees of Emotional Fit: A Range View</q></p>
              <p>Speaker: Roxy Alexander: <q>Epistemic Injustice and ADHD Girls in the K-12 Education System</q></p>
              <p>Moderator: Knaviyah Howard</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Alumna Keynote (3:00pm - 4:30pm ET) — <i>Title TBA</i></h2>
            <div className='pl-10'>
              <p>Keynote: Kathleen Lowenstein. PhD Student, Philosophy, Michigan State University.</p>
              <p>Moderator: Steve Muir</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Social/Networking Hour (5:05pm - 6:00pm ET)</h2>
          </div>

        </div>

        <div className='py-5'>
          <h1 className='text-3xl font-bold pb-2'>Day 3 Schedule (April 28)</h1>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Sunday Open (10:45am - 11:00am ET)</h2>
            <div className='pl-10'>
              <p>Sunday Open will consist of coffee chat and technical check.</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel E (11:00am - 12:30pm ET) — <i>Topics in Bioethics</i></h2>
            <div className='pl-10'>
              <p>Speaker: Daniel Gaines, <q>Transgender Healthcare, Depathologization, and the Gender Dysphoria Diagnosis</q></p>
              <p>Speaker: Xiu Lim: <q>Could (some) religious leaders have a special obligation to morally bioenhance? Examining the use of libido-reducing drugs to promote celibacy</q></p>
              <p>Speaker: Natalia Nealon: <q>Epistemic Shortcuts and Unjust Diagnostic Practices</q></p>
              <p>Moderator: Steve Muir</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel F (1:20pm - 2:50pm ET) — <i>Feminist Perspectives</i></h2>
            <div className='pl-10'>
              <p>Speaker: Margaret Murphy, <q>Nara Smith: A Case Study in Black Motherhood and Trad Wives</q></p>
              <p>Speaker: Mary Peterson and Kate Yuan: <q>Ethics is Failing Ethics: Citation Standards for Sexual Misconduct in the Field</q></p>
              <p>Speaker: Neha Nandakumar: <q>Taking Care of Yourself in a Workist Society</q></p>
              <p>Moderator: Lilly Tran</p>
            </div>
          </div>


          <div className="py-5">
            <h2 className='text-1xl font-bold'>Panel G (3:00pm - 4:30pm ET) — <i>Historical Methodologies</i></h2>
            <div className='pl-10'>
              <p>Speaker: Jonmarc Bennett, <q>Tosaka Jun on Cultural Freedom</q></p>
              <p>Speaker: Ethan Gettes: <q>The Fractured Totality: Benjamin, Hegel, and the Politics of Universal History</q></p>
              <p>Speaker: Spencer Heitman: <q>Blaming Backward: On Moral Evaluations of Historical Predecessors</q></p>
              <p>Moderator: Carson Saffold</p>
            </div>
          </div>

          <div className="py-5">
            <h2 className='text-1xl font-bold'>Closing Remarks (4:35pm - 4:45pm ET)</h2>
            <div className='pl-10'>
              <p>Closing remarks delivered by Philosophical Union of UNC Charlotte Co-Presidents</p>
              <p>Nicholas Osaka and Steve Muir</p>
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
