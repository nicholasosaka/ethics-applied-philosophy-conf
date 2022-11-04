import Link from 'next/link'

const Form = () => {
    return (
    <form action="" method="post" className='w-5/6 xl:w-2/3 mx-auto my-20'>
        <div className='grid my-5'>
            <label htmlFor="name" className='text-xl font-semibold'>Name</label>
            <p className='font-light tracking-tight'>Your name as you would like it to appear on program, if accepted</p>
            <input name='name' id='name' type="text" className='form-input sm:w-2/3 mt-2'/>
        </div>
        <div className='grid my-5'>
            <label htmlFor="email" className='text-xl font-semibold'>Email</label>
            <p className='font-light tracking-tight'>A reliable email to contact you by</p>
            <input name='email' id='email' type="email" className='form-input sm:w-2/3 mt-2'/>
        </div>
        <div className='grid my-5'>
            <label htmlFor="institution" className='text-xl font-semibold'>Institution</label>
            <p className='font-light tracking-tight'>Please list your institution</p>
            <input name='institution' id='institution' type="text" className='form-input sm:w-2/3 mt-2'/>
        </div>
        <div className='grid my-5'>
            <label htmlFor="studentstatus" className='text-xl font-semibold'>Student Status</label>
            <p className='font-light tracking-tight'>This year, we will be holding a special panel with submissions submitted by undergraduates. Please indicate your student status.</p>
            <select name='studentstatus' id='studentstatus' className='form-select sm:w-2/3 mt-2'>
                <option value="">Please select an option</option>
                <option value="graduate">Graduate student</option>
                <option value="undergraduate">Undergraduate student</option>
            </select>
        </div>
        <div className='grid my-5'>
            <label htmlFor="abstract" className='text-xl font-semibold'>Abstract</label>
            <p className='font-light tracking-tight'>Please paste your abstract (~500 words) below.</p>
            <textarea name='abstract' id='abstract' className='form-textarea resize-y mt-2 h-96'/>
        </div>
        <div className='grid my-5'>
            <label htmlFor="keywords" className='text-xl font-semibold'>Keywords</label>
            <p className='font-light tracking-tight'>Please list the keywords (comma separated) associated with your paper</p>
            <input name='keywords' id='keywords' type="text" className='form-input mt-2'/>
        </div>
        <p className='font-light tracking-tight mx-auto w-fit mt-16'>Please review prior to submission</p>
        <div className='w-fit mx-auto mt-5 bg-green-100'>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                Submit abstract
            </button>
        </div>
    </form>
    )
  }
  

  export default Form
