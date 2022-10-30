import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-center h-52 bg-indigo-900'>
        <div className='container mx-auto mt-3 md:mx-40'>
          <div className='flex justify-between w-full text-white'>
            <span className='font-medium'>Looking</span>
            <div className='flex justify-between gap-4'>
              <button className='border-none px-3 py-1 bg-white text-indigo-800 text-sm'>Register</button>
              <button className='border-none px-3 py-1 bg-white text-indigo-800 text-sm'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar