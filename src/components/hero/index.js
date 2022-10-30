import React from 'react'
import { Link } from 'react-router-dom';
import ReactTyped from 'react-typed';
import Ridho from '../../assets/ridho.png';

const Hero = () => {
  return (
    <>
      <section id='home' className='pt-36'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Hello, All 👏 I'am <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Ridho</span></h1>
              <h2 className='font-medium text-secondary text-lg mb-5'><span className='text-dark lg:text-2xl'>Web Developer</span> || Web Designer</h2>
              <div className='flex flex-wrap'>
                <ReactTyped
                  className='font-bold text-secondary text-lg mb-5'
                  strings={['Web programming', 'Is', 'Simple']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </div>
              <Link to={'/'} className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Contact Me</Link>
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className='relative mt-10 lg:mt-9 lg:right-0'>
                <img src={Ridho} alt='ridho' style={{ height: 400 }} className='max-w-full mx-auto' />
                <span className='absolute bottom-20 -z-10 left-1/2 -translate-x-1/2'>
                  <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#A855F7" d="M47,-55.3C62.7,-42.9,78.3,-29.7,84.8,-12.1C91.3,5.5,88.7,27.6,76.1,38.6C63.4,49.6,40.7,49.5,21.2,55.2C1.8,61,-14.4,72.6,-28.1,70.5C-41.7,68.4,-52.7,52.6,-63.7,35.7C-74.7,18.9,-85.7,0.9,-80.9,-12.2C-76.1,-25.2,-55.5,-33.4,-39.3,-45.7C-23.2,-58.1,-11.6,-74.7,2,-77.1C15.7,-79.5,31.3,-67.8,47,-55.3Z" transform="translate(100 100)" scale={1.1} />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;