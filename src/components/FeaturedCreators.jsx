import React from 'react'
import Image1 from "../assets/images/MelissaRay.png"
import Image2 from "../assets/images/MileyJonas.png"
import Image3 from "../assets/images/SamanthaSane.png"
import Image4 from "../assets/images/SharonTate.png"
import Image5 from "../assets/images/IndiraBedi.png"
import FeaturedCreatorsCards from './cards/FeaturedCreatorsCards'

const FeaturedCreators = () => {
    return (
        <main className='mt-5'>
            <section className="flex items-center justify-between gap-6">
                <h4 className="font-bold text-[24px] whitespace-nowrap text-ternary-dark dark:text-ternary-light">
                    Featured Creators
                </h4>
                <div className="w-10/12 h-[1px] bg-[#F2F2F2]"></div>
            </section>
            <section className='flex flex-wrap gap-7 pb-[4rem]'>
                <FeaturedCreatorsCards image={Image1} />
                <FeaturedCreatorsCards image={Image2} />
                <FeaturedCreatorsCards image={Image3} />
                <FeaturedCreatorsCards image={Image4} />
                <FeaturedCreatorsCards image={Image5} />
                <FeaturedCreatorsCards image={Image3} />
                <FeaturedCreatorsCards image={Image4} />
                <FeaturedCreatorsCards image={Image5} />
            </section>
        </main>
    )
}

export default FeaturedCreators