import React, { useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router'
import {assets} from '../assests/assets'

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);     // this means logged out
  const [token, setToken] = useState(false);   // When we have tokken means we logged in
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <Link to={'/'} className='flex text-gray-700 font-bold text-2xl whitespace-nowrap'>InterviewPrep-AI</Link>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to={'/'}>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/interviews'}>
            <li className='py-1'>INTERVIEWS</li>
            <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/languages'}>
            <li className='py-1'>LANGUAGES</li>
            <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto hidden'/>
        </NavLink>  
      </ul>
      <div className='flex item-center gap-4'>
        {
            token
            ? <div className='flex item-center gap-2 cursor-pointer group relative'> 
                <img className='w-8 rounded-full' src= {assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=> navigate('/my-interviews')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={() => navigate('/login')} className='btn-primary'>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* Mobile Menu  */}
        <div className={ `${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <Link to={'/'} className='flex text-gray-700 font-bold text-2xl whitespace-nowrap'>InterviewPrep-AI</Link>
            <img className='w-7' onClick={() => {setShowMenu(false)}} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => {setShowMenu(false)}} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/interviews'><p className='px-4 py-2 rounded inline-block'>INTERVIEWS</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/languages'><p className='px-4 py-2 rounded inline-block'>LANGUAGES</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
