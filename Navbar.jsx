import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-2'>
      <h2 className='font-semibold'>User Management</h2>
      <ul className='flex space-x-4'>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </ul>
    </div>
  )
}

export default Navbar