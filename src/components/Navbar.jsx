import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-purple-50 sticky top-0 w-full h-15 '>
            <div className="container py-5 h-14 mx-auto flex justify-between items-center px-4">

                <div className="logo font-bold text-2xl">
                    <span className="text-violet-400">&lt;</span>
                    <span className="text-purple-50">Pass</span>
                    <span className="text-violet-400">OP/ &gt;</span>
                </div>

                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:text-violet-300 hover:font-bold hover:cursor-pointer transition-all duration-200' href="/">Home</a>
                        <a className='hover:text-violet-300 hover:font-bold hover:cursor-pointer transition-all duration-200' href="#">About</a>
                        <a className='hover:text-violet-300 hover:font-bold hover:cursor-pointer transition-all duration-200' href="#">Contact</a>
                    </li>
                </ul> */}
                <div><img src="/icons/github.svg" alt="github" className='w-8 invert hover:cursor-pointer hover:animate-pulse' /></div>
            </div>
        </nav>
    )
}

export default Navbar