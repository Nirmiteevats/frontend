import React from 'react'

const Card = ( { title, description, btnText } ) => {
  return (
    <div className='bg-blue-100 p-5 rounded-xl space-y-4 shadow-xl'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p>{description}</p>
        <button className='bg-blue-500 text-white p-2 rounded-lg'>{btnText}</button>

    </div>
  )
}

export default Card;