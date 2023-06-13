/* eslint-disable react/prop-types */
import React from 'react'

const Textarea = ({ cols, rows, placeholder, value, onChange }) => {
  return (
    <textarea
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={onChange}
    />
  )
}

export default Textarea
