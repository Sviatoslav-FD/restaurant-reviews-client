/* eslint-disable react/prop-types */
import React from 'react'

const Button = ({ text, type, onClick }) => {
  return (
    <button
      type={type || 'button'}
      className='shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
