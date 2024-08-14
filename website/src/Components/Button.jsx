import React from 'react'

function Button({children}) {
  return (
    <div className=' flex gap-3 items-center bg-violet-500 px-6 py-1.5 rounded-xl'>{children}</div>
  )
}

export default Button;