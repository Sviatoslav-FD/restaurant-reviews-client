/* eslint-disable react/prop-types */
import React from 'react'

const Select = ({ disabled, options, value, onChange }) => {
  const optionItems = options.map(({ value, text }) =>
    <option value={value} key={value}>{text}</option>
  )

  return (
    <select
      value={value}
      onChange={onChange}
      className='block shadow appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
    >
      <option disabled>{disabled}</option>

      {optionItems}
    </select>
  )
}

export default Select
