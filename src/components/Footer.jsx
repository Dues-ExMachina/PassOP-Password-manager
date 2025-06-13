import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-[oklch(0.41 0.17 288.63)] text-white bottom-0'>
            {/* <div>
                <h1 className='text-2xl font-bold text-center'>
                    <span className="text-violet-400">&lt;</span>
                    <span className='text-purple-50'>Pass</span>
                    <span className="text-violet-400">OP/ &gt;</span>
                </h1>
            </div > */}
            <div className='flex gap-1 items-center p-2'>
                Created with span <img className='w-5' src="/icons/love.svg" alt="love" /> by DuesExMachina
            </div>
        </div>
    )
}

export default Footer
