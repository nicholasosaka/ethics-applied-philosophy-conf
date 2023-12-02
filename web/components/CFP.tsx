import Link from 'next/link'

const CFP = () => {
    return (
    <div className='text-jet text-center'>
      <h1 className='text-3xl font-extrabold lg:mb-5 uppercase text-left lg:text-center'>Call for Abstracts</h1>
      <div className='mb-10 flex lg:flex-row flex-col gap-x-10 lg:w-2/3 lg:mx-auto'>
        <div>
          <h2 className='text-3xl font-bold uppercase my-5 text-left'>Praxis as First Philosophy</h2>
        </div>
        <div className='text-left flex flex-row'>
          <div className="inline-block h-40 lg:w-6 self-stretch opacity-100 bg-jet lg:mr-8 lg:mt-1"></div>
          <div className=''>
            <h2 className='text-xl font-normal'>4<sup>th</sup> Annual Ethics and Applied Philosophy Graduate Conference hosted by the Philosophical Union of the University of North Carolina at Charlotte</h2>
            <h2 className='text-xl font-normal pt-4'>April 26 - 28, 2023, virtually</h2>
          </div>
        </div>
      </div>

      <div className='mx-auto w-11/12 lg:w-3/5 md:flex md:flex-row gap-x-10'>
        <div className='py-1 md:w-1/2  md:text-left'>
          <p className='font-bold uppercase text-lg'>Suggested Topics</p>
          <ul className='pl-6 list-disc text-left'>
            <li>Bioethics</li>
            <li>Queer Theory</li>
            <li>Disability Theory</li>
            <li>Critical Race Theory</li>
            <li>Political Philosophy</li>
            <li>Feminist Philosophy</li>
            <li>Decolonial Studies</li>
            <li>Science, Technology, & Society</li>
            <ul className='md:list-disc pl-8'>
              <li>Environmental Injustice</li>
              <li>AI/Data Injustice</li>
            </ul>
            <li>Philosophical Psychology</li>
            <li>Geographies</li>
            <li>Body Politics</li>
          </ul>
        </div>
        <div className='mt-10 md:mt-0 md:w-1/2 mx-auto flex flex-col gap-y-10'>
          <div className=' md:text-left'>
            <p className='font-bold uppercase text-lg'>Additional Information</p>
            <p className='text-left'>This fully virtual conference highlights the application of philosophy and ethics to concrete issues and dynamics in the world today. <i><b>Submissions on any topic within Ethics and Applied Philosophy (broadly construed) will be considered</b></i>.</p>
            <p className='text-left pt-2'>While this is a graduate conference, we welcome submissions from undergraduate and independent scholars. Accepted undergraduate work will be recognized as exemplary.</p>
            <p className='text-left pt-2'>Those interested in presenting at this conference are invited to submit <b>250-300 word abstracts</b> with 3-5 descriptive keywords. Accepted submissions should be prepared for <b>15 minute presentations and 10 minutes of Q&A</b> on the day of the conference.</p>
          </div>
          <div className=''>
            <p className='font-bold uppercase text-lg'>Accessibility</p>
            <p className='text-left'>Closed captioning, webinar Q&A, slide sharing in Google Drive will be available. Contact nosaka <i>at</i> charlotte <i>dot</i> edu for additional access needs.</p>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='font-bold text-lg uppercase py-3'>Dates</h1>
        <ol className="items-center lg:flex gap-x-10 justify-around w-5/6 mx-auto">
          <li className="">
            <h3 className="text-lg font-semibold">Abstract Submission Deadline</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">1 March 2024</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Abstract Acceptance Notification</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">25 March 2024</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Acceptance Confirmation Deadline</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">8 April 2024</time>
          </li>
          <li className="">
            <h3 className="text-lg font-semibold">Conference Dates</h3>
            <time className="block mb-2 text-sm font-normal leading-none uppercase">26 - 28 April 2024</time>
          </li>
      </ol>


      </div>
    </div>
    )
  }
  

  export default CFP
