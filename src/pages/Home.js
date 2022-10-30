import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ridho from '../assets/ridho.png';
import P1 from '../assets/p1.png';
import P2 from '../assets/p2.png';
import Google from '../assets/Google.png';
import Tokopedia from '../assets/Tokopedia.svg.png';
import Arkademy from '../assets/Arkademy.png';
import Fazztrack from '../assets/Fazztrack.png';
import { FiYoutube, FiInstagram, FiFacebook, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menus = [
    { title: "Beranda" },
    { title: "About Me" },
    { title: "Portfolio" },
    { title: "Clients" },
    { title: "Blog" },
    { title: "Contact" },
  ];
  return (
    <>
      <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className='container'>
          <div className='flex items-center justify-between relative'>
            <div className='px-4'>
              <Link className='font-bold text-lg text-primary block py-6'>Ridho</Link>
            </div>
            <div className='flex items-center p-4'>
              {!isOpen ? (<button onClick={() => setIsOpen(true)}><FiMenu className='text-2xl' /></button>) : (<button className='z-10' onClick={() => setIsOpen(false)}><FiX className='text-2xl' /></button>)}
              <div className={`top-0 right-0 fixed bg-primary w-[35vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <ul className="pt-6">
                  {Menus.map((Menu, index) => (
                    <li
                      key={index}
                      className={`flex rounded-md p-2 cursor-pointer hover:bg-secondary text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                        } `}
                    >
                      <FiYoutube />
                      <span className={`${!isOpen && "hidden"} origin-left duration-200 text-xl`}>
                        {Menu.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id='home' className='pt-36'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Hello, All 👏 I'am <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Ridho</span></h1>
              <h2 className='font-medium text-secondary text-lg mb-5'><span className='text-dark lg:text-2xl'>Web Developer</span> || Web Designer</h2>
              <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Web programming is <span className='text-dark font-bold'>simple</span></p>
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
                <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiYoutube title='Youtube' className='text-md' /></Link>
                <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiInstagram title='Instagram' className='cursor-pointer text-md' /></Link>
                <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiFacebook title='Facebook' className='cursor-pointer text-md' /></Link>
                <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiLinkedin title='LinkedIn' className='cursor-pointer text-md' /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className='pt-36 pb-32'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
              <h4 className='font-semibold text-lg text-primary mb-2'>Contact</h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>Contact Us</h2>
              <p className='font-medium text-md text-secondary md:text-lg'>Project web and mobile using React JS and React Native and let's Join</p>
            </div>
          </div>
          <form>
            <div className='w-full lg:w-2/3 lg:mx-auto'>
              <div className='w-full px-4 mb-8'>
                <label htmlFor='name' className='text-base font-bold text-primary'>
                  Nama
                </label>
                <input type='text' id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
              </div>
              <div className='w-full px-4 mb-8'>
                <label htmlFor='email' className='text-base font-bold text-primary'>
                  Email
                </label>
                <input type='email' id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
              </div>
              <div className='w-full px-4 mb-8'>
                <label htmlFor='message' className='text-base font-bold text-primary'>
                  Message
                </label>
                <textarea type='email' id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32' />
              </div>
              <div className='w-full px-4'>
                <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className='bg-dark pt-24 pb-12'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 mb-12 text-slate-300 font-medium lg:w-1/3'>
              <h2 className='font-bold text-4xl text-white mb-5'>Fazztrack</h2>
              <h3 className='font-bold text-2xl mb-2'>Contact Us</h3>
              <p>rmuhammad952@gmail.com</p>
              <p>Jl. Persatuan No. 23</p>
              <p>Padang</p>
            </div>
            <div className='w-full px-4 mb-12 lg:w-1/3'>
              <h3 className='font-semibold text-xl text-white mb-5'>Category Letter</h3>
              <ul className='text-slate-300'>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Programming</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Technology</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Life Style</Link>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 lg:w-1/3'>
              <h3 className='font-semibold text-xl text-white mb-5'>Link</h3>
              <ul className='text-slate-300'>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Beranda</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>About Me</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Portfolio</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Clients</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Blog</Link>
                </li>
                <li>
                  <Link className='inline-block text-base hover:text-primary mb-3'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full pt-10 border-t border-slate-700'>
            <div className='flex items-center justify-center mb-5 gap-2'>
              <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiYoutube title='Youtube' className='text-white text-xl' /></Link>
              <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiInstagram title='Instagram' className='text-white text-xl' /></Link>
              <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiFacebook title='Facebook' className='text-white text-xl' /></Link>
              <Link className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white'><FiLinkedin title='LinkedIn' className='text-white text-xl' /></Link>
            </div>
            <p className='font-medium text-xs text-slate-500 text-center'>Created by <span className='text-pink-500'>❤</span> : <Link target='_blank' className='font-bold text-primary'>Muhammad Ridho</Link> Using <Link className='text-sky-500'>React JS & Tailwind CSS</Link></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home