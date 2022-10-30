import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/Google.png';
import Tokopedia from '../../assets/Tokopedia.svg.png';
import Arkademy from '../../assets/Arkademy.png';
import Fazztrack from '../../assets/Fazztrack.png';

const Client = () => {
  return (
    <>
      <section className='pt-36 pb-32 bg-slate-700'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto text-center mb-16'>
              <h4 className='font-semibold text-lg text-primary mb-2'>Clients</h4>
              <h2 className='font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>Client Join With Us</h2>
              <p className='font-medium text-md text-secondary md:text-lg'>Project web and mobile using React JS and React Native</p>
            </div>
          </div>
          <div className='w-full px-4'>
            <div className='flex flex-wrap items-center justify-center'>
              <Link to={'/'} className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                <img src={Fazztrack} alt='fazztrack' />
              </Link>
              <Link to={'/'} className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                <img src={Google} alt='google' />
              </Link>
              <Link to={'/'} className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                <img src={Tokopedia} alt='tokopedia' />
              </Link>
              <Link to={'/'} className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                <img src={Arkademy} alt='arkademy' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Client