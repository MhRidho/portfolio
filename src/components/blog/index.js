import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className='pt-36 pb-32 bg-slate-100'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
              <h4 className='font-semibold text-lg text-primary mb-2'>Blog</h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>New Letter</h2>
              <p className='font-medium text-md text-secondary md:text-lg'>Project web and mobile using React JS and React Native</p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                <img src='https://source.unsplash.com/360x200?programming' alt='programming' className='w-full' />
                <div className='py-8 px-6'>
                  <h3><Link className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Programing Tips & Trick</Link></h3>
                  <p className='font-medium text-base text-secondary mb-4'>Programming can make your life spirit too everything</p>
                  <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</Link>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                <img src='https://source.unsplash.com/360x200?mechanical+keyboard' alt='mechanical keyboard' className='w-full' />
                <div className='py-8 px-6'>
                  <h3><Link className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Review Keyboard</Link></h3>
                  <p className='font-medium text-base text-secondary mb-4'>Programming can make your life spirit too everything and maximal with mechanical keyboar</p>
                  <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</Link>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                <img src='https://source.unsplash.com/360x200?coffe' alt='coffe' className='w-full' />
                <div className='py-8 px-6'>
                  <h3><Link className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Enjoy With Your Coffe</Link></h3>
                  <p className='font-medium text-base text-secondary mb-4'>Programming can make your life spirit too everything and enjoy with coffe</p>
                  <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog