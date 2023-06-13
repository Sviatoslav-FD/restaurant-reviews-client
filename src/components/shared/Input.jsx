/* eslint-disable react/prop-types */
import React from 'react'

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
