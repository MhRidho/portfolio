import React, { useState } from 'react'
import { FiMenu, FiX, FiHome, FiUser, FiFile, FiLink, FiBook, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menus = [
    { title: "Beranda", icon: <FiHome /> },
    { title: "About Me", icon: <FiUser /> },
    { title: "Portfolio", icon: <FiFile /> },
    { title: "Clients", icon: <FiLink /> },
    { title: "Blog", icon: <FiBook /> },
    { title: "Contact", icon: <FiPhone /> },
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
              <div className={`top-0 right-0 fixed bg-primary w-1/2 md:w-80 h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <ul className="pt-6">
                  {Menus.map((Menu, index) => (
                    <li
                      key={index}
                      className={`flex rounded-md p-2 cursor-pointer hover:bg-secondary text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                        } `}
                    >
                      {Menu.icon}
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
    </>
  )
}

export default Header