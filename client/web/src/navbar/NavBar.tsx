import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='border-b-2 border-gray-300'>
      <div className='flex justify-between mx-10 my-6 text-lg'>
        <div className='text-2xl cursor-pointer'>
          <Link to="/home">Strackly</Link>
        </div>
        <div>
          <ul className='flex gap-10 cursor-pointer'>
            <li className='hover:text-blue-400'>
              <Link to="/home">Home</Link>
            </li>
            <li className='hover:text-blue-400'>
              <Link to="/products">Products</Link>
            </li>
            <li className='hover:text-blue-400'>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li className='hover:text-blue-400'>
              <Link to="/notifications">Notifications</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar