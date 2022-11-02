import React from 'react';
import { FiSend } from 'react-icons/fi';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="bg-[#2979FF] p-3 text-white w-1/4 flex justify-center items-center text-xl" onClick={e => sendMessage(e)}><FiSend /></button>
  </form>
)

export default Input;