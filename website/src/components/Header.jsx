import React from 'react';
import Nav from './Nav';

const header = () => {
  return (
    <>
    <header className='bg-slate-600 sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-4' >
      <img src="./icons/logo.png" alt="logo" width="80px" height="60px"/>
      <Nav />
    </header>
    </>
  )
}

export default header;