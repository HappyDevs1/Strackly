import React from 'react'

function NavBar() {
  return (
    <div className='border-b-2 border-gray-300'>
      <div className='flex justify-between mx-10 my-6 text-lg'>
        <div className='text-2xl cursor-pointer'>Strackly</div>
        <div>
          <ul className='flex gap-10 cursor-pointer'>
            <li className='hover:text-blue-400'>Home</li>
            <li className='hover:text-blue-400'>Products</li>
            <li className='hover:text-blue-400'>Analytics</li>
            <li className='hover:text-blue-400'>Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar