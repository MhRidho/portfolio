import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Media = ({ icon }) => {
  return (
    <>
      <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'>{icon}</Link>
    </>
  )
}

const About = () => {
  return (
    <>
      <section id='about' className='pt-36 pb-32'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 mb-10 lg:w-1/2'>
              <h4 className='font-bold uppercase text-primary text-lg mb-3'>About Me</h4>
              <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Let's go to learning code with me together</h2>
              <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Programming can make your life spirit too</p>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl pt-10'>Let's Join</h3>
              <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>Programming can make your life spirit too everything</p>
              <div className='flex items-center gap-2'>
                <Media icon={<FiInstagram />} />
                <Media icon={<FiLinkedin />} />
                <Media icon={<FiFacebook />} />
                <Media icon={<FiYoutube />} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About