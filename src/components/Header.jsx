/* eslint-disable react/prop-types */
import React from 'react'

const Header = ({ title }) => {
  return (
    <div>
      <h1 className='text-5xl text-center my-20 text-slate-500'>{ title }</h1>
    </div>
  )
}

export default Header
