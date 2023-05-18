import React, { useContext } from 'react';

import logo from '../img/logo.png';

import {FiMenu} from 'react-icons/fi';
import { useState } from 'react';

import {Link} from 'react-router-dom';

import SearchFrom from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';

const Header = () => {
  // const { isOpen, setIsOpen } = useContext(CartContext);
  const [catNavMobile, setCatnavMobile] = useState(false);
  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:item-center justify-between mb-4 xl:mb-0'>
          {/* menu */}
          <div 
          onClick={() => setCatnavMobile(true)} 
          className='text-3xl xl:hidden cursor-pointer'>
            <FiMenu />
          </div>
          {/* category nav mobile*/}
          <div 
          className={`${catNavMobile ? 'left-0' : '-left-full' } 
          fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCatnavMobile={setCatnavMobile}/>
          </div>
          {/* logo */}
          <Link to={'/'}>
          <img src={logo} alt='' />
          </Link>
          {/* searchform - show on desktop only */}
          <div className='hidden w-full xl:flex xl-max-w-[734px]'>
            <SearchFrom />
          </div>
          {/* phone & cart */}
          <div className='flex item-center gap-x-[10px]'>
            {/* phone */}
            <div className='hidden xl:flex uppercase'>
            <a href='https://wa.me/6281329929950' className='uppercase text-accent'> 
                Butuh Bantuan ? 
                </a> 
            </div>
            
          </div>
        </div>
        {/* searchform - show on mobile only */}
        <div className='xl:hidden'>
          <SearchFrom />
        </div>
      </div>
    </header>
  );
};

export default Header;