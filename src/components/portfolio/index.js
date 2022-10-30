import React from 'react';
import P1 from '../../assets/p1.png';
import P2 from '../../assets/p2.png';

const Portfolio = () => {
  return (
    <>
      <section className='pt-36 pb-16 bg-slate-100'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
              <h4 className='font-semibold text-lg text-primary mb-2'>Portfolio</h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>New Project</h2>
              <p className='font-medium text-md text-secondary md:text-lg'>Project web and mobile using React JS and React Native</p>
            </div>
          </div>
          <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img src={P1} alt='p1' width={'w-full'} />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Web Application E-Wallet</h3>
              <p>Web application for transfer and topup money with eficiency</p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img src={P2} alt='p1' width={'w-full'} />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Web Application E-Commerce</h3>
              <p>Web application for buy something</p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img src={P1} alt='p1' width={'w-full'} />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Web Application E-Wallet</h3>
              <p>Web application for transfer and topup money with eficiency</p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img src={P2} alt='p1' width={'w-full'} />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Web Application E-Commerce</h3>
              <p>Web application for buy something</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio