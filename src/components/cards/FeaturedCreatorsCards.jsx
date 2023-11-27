import React from 'react'
import { FavoritesIcon, FireIcon, HomeIcon, MessagesIcon } from '../../assets/icons/Icons'

const FeaturesComponent = ({ Icon, Desc }) => {
    return (
        <div className='flex items-center gap-1 font-bold relative'>
            <div className='relative px-2 py-1 flex items-center gap-1 rounded-3xl border border-[#F2F2F2]'>
                <Icon />
                <span className='text-xs '>{Desc}</span>
            </div>
        </div>
    )
}

const FeaturedCreatorsCards = ({ image }) => {
    return (
        <main className='xs:w-[266px] w-full relative rounded-xl overflow-hidden mt-5 FeaturedCardsShadow pb-3'>
            <img src={image} className='w-full' alt="Julia Rose" />
            <div className='absolute top-[20px] right-[20px] bg-mainColor text-xs text-white rounded-full w-4 h-4 flex items-center justify-center'>
                <div className='bg-[#F2F2F2] p-2 rounded-full'>
                    <FavoritesIcon />
                </div>
            </div>
            <div className='absolute bottom-[4.5rem] left-[1rem] text-xs text-white rounded-full gap-1 flex items-center justify-center'>
                <div className='w-[7px] h-[7px] rounded-full cursor-pointer bg-mainColor'></div>
                <div className='w-[7px] h-[7px] rounded-full cursor-pointer bg-[#F2F2F2]'></div>
                <div className='w-[7px] h-[7px] rounded-full cursor-pointer bg-[#F2F2F2]'></div>
                <div className='w-[7px] h-[7px] rounded-full cursor-pointer bg-[#F2F2F2]'></div>
                <div className='w-[5px] h-[5px] rounded-full cursor-pointer bg-[#F2F2F2]'></div>
            </div>
            <div className='absolute bottom-[5rem] right-[2.5rem] bg-mainColor text-xs text-white rounded-full w-4 h-4 flex items-center justify-center'>
                <div className='bg-mainColor w-fit flex text-white items-center px-2 py-[0.6rem] gap-2 rounded-xl'>
                    <MessagesIcon color={"#fff"} />
                    <span className='mr-2'>Chat</span>
                </div>
            </div>
            <section className='px-2'>
                <span className='font-bold text-lg'>Julia Rose</span>
                <div className='flex items-center justify-between'>
                    <span className='text-xs'>1 token / min</span>
                    <FeaturesComponent Icon={FireIcon} Desc={"NSFW"} />
                    <FeaturesComponent Icon={FireIcon} Desc={"Caring"} />
                    <FeaturesComponent Icon={FireIcon} Desc={"New"} />
                </div>
            </section>
        </main>
    )
}

export default FeaturedCreatorsCards