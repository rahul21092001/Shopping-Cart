import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col top-1/2 items-center'>
      <div className="custom-loader"></div>
    </div>
  )
}

export default Spinner