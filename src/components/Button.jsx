import React from 'react'

const Button = ( { children } ) => {
  return (
    <button className="bg-blue-500 text-white hover:bg-blue-600 duration-300 px-4 py-2 rounded-lg">{children}</button>
  )
}

export default Button;