import React, { useCallback, useRef, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import JumpBackinCard from "./cards/JumpBackinCard";
import Image1 from "../assets/images/MelissaRay.png"
import Image2 from "../assets/images/MileyJonas.png"
import Image3 from "../assets/images/SamanthaSane.png"
import Image4 from "../assets/images/SharonTate.png"
import Image5 from "../assets/images/IndiraBedi.png"

const JumpBackIn = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(5); // Large screens
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3); // Medium screens
            } else {
                setSlidesPerView(2); // Small screens
            }
        };
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, [slidesPerView]);

    const testimonials = [
        {
            image: Image1,
            name: "Melissa Ray"
        },
        {
            image: Image2,
            name: "Miley Jonas",
        },
        {
            image: Image3,
            name: "Samantha Sane",
        },
        {
            image: Image4,
            name: "Sharon Tate",
        },
        {
            image: Image5,
            name: "Indira Bedi",
        },
    ];

    return (
        <>
            <section className="relative mt-6">
                <section className="flex items-center justify-between">
                    <h4 className="font-bold text-[24px] whitespace-nowrap text-ternary-dark dark:text-ternary-light">
                        Jump Back In
                    </h4>
                    <div className="w-9/12 h-[1px] bg-[#F2F2F2]"></div>
                    <div className="flex items-center justify-center">
                        <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                            <button className="text-primary hover:bg-mainColor shadow-input mx-1 flex h-9 w-9 items-center justify-center rounded-xl border border-[#F2F2F2] transition-all hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41l-4.83 4.83 4.83 4.83L14 18l-6-6 6-6 1.41 1.41z" />
                                </svg>
                            </button>
                        </div>
                        <div className="next-arrow cursor-pointer" onClick={handleNext}>
                            <button className="text-primary hover:bg-mainColor shadow-input flex h-9 w-9 items-center justify-center rounded-xl border border-[#F2F2F2] transition-all hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M10.59 16.41l4.83-4.83-4.83-4.83L12 6l6 6-6 6-1.41-1.41z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    ref={sliderRef}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <JumpBackinCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default JumpBackIn;
