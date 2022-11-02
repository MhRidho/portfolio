import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex justify-center text-center h-screen items-center bg-[#1A1A1D]">
      <div className="w-full px-10 md:w-1/3">
        <h1 className="text-bold text-white text-4xl pb-5">Join</h1>
        <div>
          <input placeholder="Name" className="w-full p-4" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="w-full p-4 mt-4" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className='text-white font-bold w-full bg-[#2979FF] p-4 mt-5 hover:opacity-70 uppercase rounded-sm' type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;