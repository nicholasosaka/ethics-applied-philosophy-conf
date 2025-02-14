import Link from 'next/link'

const CFP = () => {
    return (
    <div className='text-jet text-center'>
      <h1 className='text-3xl font-extrabold lg:mb-5 uppercase text-left lg:text-center'>Call for Papers</h1>
      <div className='mb-10 flex xl:flex-row flex-col xl:gap-x-32 lg:w-2/3 lg:mx-auto'>
        <div>
          <h2 className='text-5xl font-bold uppercase my-5 xl:my-0 text-left'>Ethics in a Changing World</h2>
        </div>
        <div className='text-left flex flex-row'>
          <div className="inline-block h-50 xl:w-6 self-stretch opacity-100 bg-jet xl:mr-8 xl:mt-1"></div>
          <div className=''>
            <h2 className='text-xl font-normal'>6<sup>th</sup> Annual Ethics and Applied Philosophy Graduate Conference hosted by the Philosophical Union of the University of North Carolina at Charlotte</h2>
            <h2 className='text-xl font-normal pt-4'>April 25 - 26, 2025, virtually</h2>
            <h3 className='text-lg font-bold pt-4'>Keynote speakers:</h3>
            <div className='text-lg font-normal'>
              <h4>Amelia Wiercioch, M.A., University of North Carolina Alumna Speaker</h4>
              <h4>Dr. Evie Kendal, Swinburne University of Technology</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-11/12 lg:w-3/5 md:flex md:flex-row gap-x-10'>
        <div className='py-1 md:w-1/2  md:text-left'>
          <p className='font-bold uppercase text-lg'>Suggested Topics</p>
          <ul className='pl-6 list-disc text-left'>
            <li>Misinformation/Disinformation</li>
            <li>Implications of recent social policy</li>
            <li>Health Ethics/Inequality and (in)equity</li>
            <li>Political Philosophy</li>
            <li>Feminist Philosophy</li>
            <li>Climate justice, systemic (in)justice</li>
            <ul className='md:list-disc pl-8'>
              <li>Morality/philosophy of society</li>
              <li>AI/Data Injustice</li>
            </ul>
            <li>Medicine</li>
            <li>Law</li>
          </ul>
        </div>
        <div className='mt-10 md:mt-0 md:w-1/2 mx-auto flex flex-col gap-y-10'>
          <div className='md:text-left'>
            <p className='font-bold uppercase text-lg'>Additional Information</p>
            <p className='text-left'>This conference will be held completely virtually to allow everyone the opportunity to share their research without the financial limitations of physical travel. If you have accessibility concerns, please contact Brit Davis (bdavi182@charlotte.edu) to discuss potential accommodations such as captions or transcripts. We are committed to making this an inclusive event, and welcome submissions from undergraduate students at all levels of study. <i><b>Submissions on any topic within Ethics and Applied Philosophy (broadly construed) will be considered</b></i>.</p>
            <p className='text-left pt-2'>Accepted undergraduate work will be recognized as exemplary.</p>
            <p className='text-left pt-2'>Those interested in presenting at this conference are invited to submit papers <b>no more than 3,000 words (exclusing footnotes and bibliography) </b> Accepted submissions should be prepared for <b>20 minute presentations and 10 minutes of Q&A</b> on the day of the conference.</p>
          </div>
          <div className='md: text-left'>
            <p className='font-bold uppercase text-lg'>Accessibility</p>
            <p className='text-left'>Closed captioning, webinar Q&A, slide sharing in Google Drive will be available. Contact bdavi182 <i>at</i> charlotte <i>dot</i> edu for additional access needs.</p>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='font-bold text-lg uppercase py-3'>Dates</h1>
        <ol className="items-center lg:flex gap-x-10 justify-around w-5/6 mx-auto">
          <li className="">
            <h3 className="text-lg font-semibold">Paper Submission Deadline</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">14 March 2025</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Paper Acceptance Notification</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">24 March 2025</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Acceptance Confirmation Deadline</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">7 April 2025</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Conference Dates</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">25 - 26 April 2025</time>
          </li>
      </ol>


      </div>
    </div>
    )
  }
  

  export default CFP
