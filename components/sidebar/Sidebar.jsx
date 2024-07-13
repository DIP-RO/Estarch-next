// components/Sidebar.js
import Link from 'next/link';
import { CiStar } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdChecklist } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="border border-gray-200">
      <ul>
        <li className="mb-2 bg-gray-100 px-4 py-2">
          <Link href="/user" className= "flex items-center gap-2 "><span className='bg-orange-400 text-4xl rounded-full text-white'><FaRegUserCircle /></span>My Profile</Link>
        </li>
        <li className="mb-2 px-4 py-2">
          <Link href="/user/dashboard" className= "flex items-center gap-2"><span className='rounded-md border border-gray-500'><MdChecklist /></span>My Order</Link>
        </li>
        <li className="mb-2 px-4 py-2">
          <Link href="/user" className= "flex items-center gap-2"><span className=' rounded-md border border-gray-500'><CiStar /></span>Review</Link>
        </li>
  
      </ul>
    </div>
  );
};

export default Sidebar;
