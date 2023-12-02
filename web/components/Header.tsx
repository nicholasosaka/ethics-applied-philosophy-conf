import Link from 'next/link'

const Header = () => {
    return (
    <div className='py-5 text-jet'>
        <div className='mx-5'>
            <h1 className='text-xl font-extrabold'>Ethics and Applied Philosophy Graduate Conference</h1>
            <h2 className='text-md'>at UNC Charlotte, hosted by the Philosophical Union of UNC Charlotte</h2>
        </div>
        <nav className='mx-5 mt-5'>
          <ol className='flex justify-center gap-8 font-bold tracking-tight'>
            <li><Link href="/">conference 2024</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/archive">archive</Link></li>
          </ol>
        </nav>
    </div>
    )
  }
  

  export default Header
