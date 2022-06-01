// import React from 'react';
// import CustomLink from '../CustomLink/CustomLink';
import './header.css'


import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';



const Header = () => {


    const [showMenu , setShowMenu] = useState(false)

    // const handleShowHide  = ()=>{
    //     setShowMenu(!showMenu)
    // }

    return (

        <div>
        {/* <h5 className='absolute z-50 text-4xl block md:hidden left-5 top-3'>
            
       { showMenu ? <GrFormClose onClick={handleShowHide} className="cursor-pointer" />  :  <FiMenu onClick={handleShowHide} className='cursor-pointer' />}
        </h5>   */}


       <ul className={showMenu ? 'notActive' : 'header-container' }>
           <li className='liItem'>
               <NavLink className={({isActive})=> isActive ? "nav" : 'nav-item'} to="/">Home</NavLink>
           </li>
           <li className='liItem'>
               <NavLink className={({isActive})=> isActive ? "nav" : 'nav-item'} to="/allReviews">Reviews</NavLink>
           </li>
           <li className='liItem'>
               <NavLink className={({isActive})=> isActive ? "nav" : 'nav-item'} to="/dashboard">Dashboard</NavLink> 
           </li>
           <li className='liItem '>
               <NavLink className={({isActive})=> isActive ? "nav" : 'nav-item'} to="/blogs">Blog</NavLink>
           </li>
           <li className='liItem'>
               <NavLink className={({isActive})=> isActive ? "nav" : 'nav-item'} to="/about">About</NavLink>
           </li>
       </ul>
   </div>




        // <nav className='header-container'>
        //     <CustomLink to = '/'></CustomLink>
        //     <CustomLink to = '/home'>HOME</CustomLink>
        //     <CustomLink to = '/allreviews'>RIVIEWS</CustomLink>
        //     <CustomLink to = '/dashboard'>DASHBOARD</CustomLink>
        //     <CustomLink to = '/blogs'>BLOGS</CustomLink>
        //     <CustomLink to = '/about'>ABOUT</CustomLink>
        // </nav>
    );
};

export default Header;