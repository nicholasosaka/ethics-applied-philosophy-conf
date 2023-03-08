import Link from 'next/link'

const CFP = () => {
    return (
    <div className='py-5 text-jet text-center'>
      <div className='pb-10'>
        <h1 className='text-3xl font-extrabold'>Call for Abstracts</h1>
        <h2 className='text-2xl font-bold'>Ethics and Applied Philosophy Conference</h2>
        <h2 className='text-2xl font-bold'>April 28 & 29, 2023</h2>
        <h3 className='text-xl'>Virtually via Zoom</h3>
        <p className='pt-2 font-bold'>With keynote speaker:</p>
        <p className='font-bold italic'>Johnathan Flowers, California State University, Northridge</p>
      </div>

      <p className='italic'>Submissions on any topic within Ethics and Applied Philosophy (broadly construed) will be considered.</p>
      <p className='py-5'>Some encouraged topics include, but are not limited to:</p>
      <ul className='pb-5'>
        <li>Feminist Philosophy</li>
        <li>Environmental/Animal Ethics</li>
        <li>Healthcare Ethics</li>
        <li>Queer/Trans Theory</li>
        <li>Critical Race Theory</li>
        <li>Ethical Theory</li>
        <li>Political Economy</li>
        <li>Critiques of Neoliberalism</li>
        <li>Global and International Ethics</li>
        <li>Philosophical Psychology</li>
        <li>Science, Technology, and Society</li>
        <li>Disability Theory</li>
        <li>Body Politics</li>
      </ul>

      <p className='text-left md:w-1/2 mx-auto'>Undergraduate and Graduate students interested in presenting at this conference are invited to submit 400-500 word abstracts with 3-5 descriptive keywords. Accepted submissions should be prepared for 20 minute presentations and 5 minutes of Q&A on the day of the conference.</p>

      <div className='pt-5'>
        <h2 className='font-bold italic'>Submission deadline is February 24, 2023</h2>
        <h2>Application decisions will be communicated by March 27, 2023</h2>
        <h2 className='font-bold italic'>The submission deadline has passed. We are currently reviewing submissions and will be in touch in late March.</h2>
      </div>
    </div>
    )
  }
  

  export default CFP
