import React from 'react'

const SelectsCard = (props) => {
  return (
    <div className=' relative'>
      <img className=' w-full h-full object-cover' src={props.bg} alt="" />
      <div className=' absolute bg-gray-900/30 w-full h-full top-0 left-0'>
            <p className='left-4 absolute bottom-4 font-bold text-white text-2xl'>
              {props.text}
            </p>
      </div>
    </div>
  )
}

export default SelectsCard
