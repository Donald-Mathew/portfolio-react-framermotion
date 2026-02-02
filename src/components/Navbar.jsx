import React, { useState } from 'react';
import assets from '../assets/assets';
import { ArrowRight, HamburgerIcon, Menu, MenuIcon, MenuSquareIcon, Moon, MoonIcon, SidebarCloseIcon, SquareMenu, SunIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from "motion/react";

const Navbar = ({theme, setTheme}) => {
     
    const [sideBarOpen, setSidebarOpen] = useState(false); 

    const handleClose = () => {
        setSidebarOpen(false);
    };

    const handleOpen = () => {
        setSidebarOpen(true);
    }


  return (
    <motion.nav 
      initial={{opacity:0, y:-50}}
      animate= {{opacity:1, y: 0}}
      transition={{duration:1.2, ease:"easeOut" }}
      className='flex justify-between items-center px-4 sm:-px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

     <img src= {theme === "dark" ? assets.internet : assets.codium } className={theme === "dark" ? "w-13" : "w-30"} alt=""  />

     <div className={`text-gray-700 dark:text-white sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' :  'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
      

        <XIcon className='absolute cursor-pointer w-14 right-4 top-4 sm:hidden' onClick={handleClose} />

       
         <a href="#" className="sm:hover:border-b">Home</a> 
         <a href="#services" className="sm:hover:border-b">Services</a> 
         <a href="#my-work" className="sm:hover:border-b">My Work</a>
         <a href="#contact-us" className="sm:hover:border-b">Contact Me </a>
     </div>

     <div className='flex items-center gap-2 sm:gap-4'>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      

        
        {theme === "dark" ? <MenuIcon className={'sm:hidden bg-primary rounded-[5px] size-7 cursor-pointer'} onClick={handleOpen} /> : <Menu onClick={handleOpen}  className='w-8 sm:hidden'/> }

         <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"> Connect <ArrowRight width={14} /> 
         </a> 
        
       

     </div>
      

    </motion.nav>
  )
}

export default Navbar;