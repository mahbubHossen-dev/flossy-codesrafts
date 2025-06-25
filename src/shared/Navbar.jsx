import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaListUl } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiLogInCircle } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
// import arrowIcon from '../assets/arrow-icon.png'
// import bgImg from '../assets/header-bg-color.png'
// import moonThemeIcon from '../assets/moon_icon.png'
// import menuBlackIcon from '../assets/menu-black.png'
// import closeBlackIcon from '../assets/close-black.png'
// import sunIcon from '../assets/sun_icon.png'
// import downloadIcon from '../assets/download-icon.png'
// import { AiOutlineDownload } from 'react-icons/ai';
// import menuIconWhite from '../assets/menu-white.png'
// import closeWhiteIcon from '../assets/close-white.png'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current
        // menuRef.current.classList.remove('-right-64')
        menuRef.current.style.transform = 'translateX(-256px)'
        console.log(menuRef)
        // console.log(menuRef.current.classList[4].remove())
    }

    const closeMenu = () => {
        menuRef.current.style.transform = 'translateX(256px)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    const menuLinks = <>
        <li><NavLink to={'/'} onClick={closeMenu} href='#top' className='font-Ovo'>Home</NavLink></li>
        <li><NavLink to={'/blog'} onClick={closeMenu} href='#skills' className='font-Ovo'>Blog</NavLink></li>
        <li><NavLink to={'/contact'} onClick={closeMenu} href='#about' className='font-Ovo'>Contact</NavLink></li>
    </>

    return (
        <div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex justify-between items-center py-4 z-50 ${isScroll && 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm '}`}>
                <Link className='text-xl text-black font-medium' to={{ hash: '#top' }}>Bright Smile</Link>

                <ul className={`hidden md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12  shadow-sm bg-opacity-50 z-50 ${isScroll || 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    {menuLinks}
                </ul>

                <div className='flex items-center gap-4'>
                    

                    <div>
                        <button className="btn btn-outline border-2 hover:border-[#0e6efd] text-[#0E82FD] hover:bg-[#0e6efd] duration-500 hover:text-white rounded-md font-medium py-2 px-4 flex gap-2 items-center w-full">
                            <FaPhoneVolume />
                            <span>Book an Appointment</span>
                        </button>
                    </div>

                    <div onClick={openMenu} className='block md:hidden ml-3'>
                        <FaListUl />
                    </div>
                </div>
            </nav>

            <ul ref={menuRef} className='flex md:hidden flex-col fixed -right-64 top-0 py-16 px-10 gap-4 h-screen bg-red-100 bottom-0 w-64 z-50 transition duration-500 dark:bg-[#2a004a]'>
                <div onClick={closeMenu} className='absolute top-6 right-6 '>
                    <RxCross2 />
                </div>
                {menuLinks}
            </ul>
        </div>
    );
};

export default Navbar;