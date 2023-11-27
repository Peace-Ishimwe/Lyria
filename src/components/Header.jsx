import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from "../assets/images/Logo.svg"
import { CustomerServiceIcon, HomeIcon, NotificationsIcon } from '../assets/icons/Icons'
import { DiscoverIcon } from '../assets/icons/Icons'
import { MessagesIcon } from '../assets/icons/Icons'
import { FavoritesIcon } from '../assets/icons/Icons'
import { SettingsIcon } from '../assets/icons/Icons'

const HeaderNavs = ({ Icon, NavDesc, num }) => {
  return (
    <Link to={'/'} className='flex items-center gap-1 font-bold relative'>
      <div className='bg-[#F2F2F2] relative p-2 rounded-full'>
        <Icon color={'#0E0E0E'} />
        {num && num > 0 && (
          <div className='absolute top-[-4px] right-[-3px] bg-mainColor text-xs text-white rounded-full w-4 h-4 flex items-center justify-center'>
            {num}
          </div>
        )}
      </div>
      <span className='hidden md:block'>{NavDesc}</span>
    </Link>
  );
};

const HeaderRight = ({ Icon, num }) => {
  return (
    <Link to={'/'} className='flex items-center gap-1 font-bold relative'>
      <div className='relative p-2 rounded-xl border border-[#F2F2F2]'>
        <Icon />
        {num && num > 0 && (
          <div className='absolute top-[-4px] right-[-3px] bg-mainColor text-xs text-white rounded-full w-4 h-4 flex items-center justify-center'>
            {num}
          </div>
        )}
      </div>
    </Link>
  )
}

const Header = () => {
  return (
    <main className=' flex justify-between NavHeader p-3'>
      <section className='flex items-center gap-8'>
        <img src={LogoImage} alt="logo_image" className='ml-2' />
        <section className=' fixed lg:static lg:py-0 py-2  lg:w-fit w-full lg:mx-0  bottom-0 left-0 z-50 '>
          <div className='flex bottomNav items-center gap-6 justify-center lg:justify-normal bg-white lg:p-0 p-3 mx-[1rem] md:mx-[2.5rem] lg:mx-0 rounded-3xl'>
            <Link to={'/'} className='bg-mainColor w-fit flex text-white items-center px-2 py-[0.3rem] gap-2 rounded-xl'>
              <HomeIcon />
              <span className='mr-2'>Home</span>
            </Link>
            <HeaderNavs Icon={DiscoverIcon} NavDesc={"Discover"} />
            <HeaderNavs Icon={MessagesIcon} num={2} NavDesc={"Messages"} />
            <HeaderNavs Icon={FavoritesIcon} NavDesc={"Favorites"} />
            <HeaderNavs Icon={SettingsIcon} NavDesc={"Settings"} />
          </div>
        </section>
      </section>
      <section className='flex gap-2'>
        <HeaderRight Icon={NotificationsIcon} num={2} />
        <HeaderRight Icon={CustomerServiceIcon} />
        <Link to={'/'} className='border-[1.3px] rounded-full border-mainColor flex items-center justify-center h-8 w-8 bg-[#F2F2F2] text-mainColor text-center font-bold'>A</Link>
      </section>
    </main>
  )
}

export default Header