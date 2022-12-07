import {useState, useEffect} from 'react'

const Form = () => {
    return (
        <form action="/api/submit" method="post" className='w-5/6 xl:w-2/3 mx-auto text-jet'>
            <div className='grid my-5'>
                <label htmlFor="name" className='text-xl font-semibold'>Name</label>
                <p className='font-light tracking-tight'>Your name as you would like it to appear on program, if accepted</p>
                <input name='name' id='name' type="text" className='form-input sm:w-2/3 mt-2' required/>
            </div>
            <div className='grid my-5'>
                <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                <p className='font-light tracking-tight'>A reliable email to contact you by</p>
                <input name='email' id='email' type="email" className='form-input sm:w-2/3 mt-2' required />
            </div>
            <div className='grid my-5'>
                <label htmlFor="institution" className='text-xl font-semibold'>Institution</label>
                <p className='font-light tracking-tight'>Your institutional affiliation</p>
                <input name='institution' id='institution' type="text" className='form-input sm:w-2/3 mt-2' required/>
            </div>
            <div className='grid my-5'>
                <label htmlFor="studentstatus" className='text-xl font-semibold'>Enrollment Status</label>
                <p className='font-light tracking-tight'>This year, we will be holding a special panel with submissions submitted by undergraduates, please indicate your student status</p>
                <select name='studentstatus' id='studentstatus' className='form-select sm:w-2/3 mt-2' required>
                    <option value="">Please select an option</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Independent">Independent</option>
                </select>
            </div>
            <div className='grid my-5'>
                <label htmlFor="title" className='text-xl font-semibold'>Title</label>
                <p className='font-light tracking-tight'>The title of your paper</p>
                <input name='title' id='title' type="text" className='form-input mt-2' required/>
            </div>
            <div className='grid my-5'>
                <label htmlFor="abstract" className='text-xl font-semibold'>Abstract</label>
                <p className='font-light tracking-tight'>Paste your abstract (~500 words) below</p>
                <textarea name='abstract' id='abstract' className='form-textarea resize-y mt-2 h-96' required/>
            </div>
            <div className='grid my-5'>
                <label htmlFor="keywords" className='text-xl font-semibold'>Keywords</label>
                <p className='font-light tracking-tight'>List the keywords (comma separated) associated with your paper</p>
                <input name='keywords' id='keywords' type="text" className='form-input mt-2' required/>
            </div>
            <p className='font-light tracking-tight mx-auto w-fit mt-16'>Please review prior to submission</p>
            <div className='w-fit mx-auto mt-5 bg-green-100'>
                <button className='duration-200 bg-jet hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-xl'>
                    Submit
                </button>
            </div>
        </form>
    )
  }
    
  export default Form
