import React from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../assets/icons/Icons'
import { EqualizerLineIcon } from '../assets/icons/Icons'

const SubHeader = () => {
  return (
    <main className='mt-7 flex gap-6'>
      <div className='flex px-3 ShadowSearch py-2 w-full border-[1.5px] items-center overflow-hidden rounded-xl border-[#F2F2F2]'>
        <SearchIcon />
        <input className='w-full outline-none pl-3 placeholder:text-black text-sm font-medium' type="text" placeholder='Search' />
      </div>
      <Link to={'/'} className='flex items-center gap-1 font-bold relative'>
        <div className='relative p-2 rounded-xl border border-[#F2F2F2]'>
          <EqualizerLineIcon />
        </div>
      </Link>
    </main>
  )
}

export default SubHeader