import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export const Navbar: React.FC = () =>{
    const [nav, setNav] = React.useState(false);
    const handleClick = () =>{
        setNav(!nav)
    }
    return(
      <div className='mx-auto max-w-[1240px] h-[10%] flex justify-between items-center text-white'>
        <h1 className='w-full text-3xl text-[#00df9a] font-bold'><a href='/'>Demo</a></h1>
        <ul className="hidden md:flex">
            <li className='p-4'><a href='/'>Home</a></li>
            <li className='p-4'><a href='/todoapp'>TodoApp</a></li>
            <li className='p-4'><a href='/table'>Table</a></li>
        </ul>
        {/* over 768px = hidden (for mobile) */}
        <div onClick={handleClick} className="block md:hidden"> 
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'h-full fixed left-0 top-0 w-[60%] border-r border-r-gray-900 px-4 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl text-[#00df9a] font-bold m-4'>Demo</h1>
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'><a href='/'>Home</a></li>
            <li className='p-4 border-b border-gray-600'><a href='/todoapp'>TodoApp</a></li>
            <li className='p-4 border-b border-gray-600'><a href='/table'>Table</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar;