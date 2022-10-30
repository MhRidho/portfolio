import React, { useState } from 'react';
import Chart from '../assets/Chart.png';
import Chat from '../assets/Chat.png';
import User from '../assets/User.png';
import Calendar from '../assets/Calendar.png';
import Search from '../assets/Search.png';
import Chart_fill from '../assets/Chart_fill.png';
import Folder from '../assets/Folder.png';
import Setting from '../assets/Setting.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];
  return (
    <>
      {!isOpen ? (
        <button className='fixed z-30 flex items-center cursor-pointer right-10 top-6' onClick={() => setIsOpen(true)}>
          <svg
            fill='#2563EB'
            viewBox='0 0 100 80'
            width='40'
            height='40'>
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        </button>
      ) : (
        <button className='text-2xl text-white fixed top-4 right-10 z-10' onClick={() => setIsOpen(false)}>
          x
        </button>
      )
      }
      <div className={`top-0 right-0 fixed bg-blue-500 w-[35vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <img src={Menu.src} />
              <span className={`${!isOpen && "hidden"} origin-left duration-200 text-xl`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar