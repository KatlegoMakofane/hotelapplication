import React from 'react'
import navImg from "./images/back.jpeg"
import navImg1 from "./images/hotel2.jpg"
import navImg2 from "./images/hotel5.webp"
import navImg3 from "./images/hotel4.jpg"
import navImg4 from "./images/hotel6.webp"
import navImg5 from "./images/hotel7.jpg"
import navImg6 from "./images/hotel8.jpg"

import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Swipers() {
  return (
    <div >  <><Swiper
    // install Swiper modules
    spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipers"
        >
    
    <SwiperSlide className='slide'><img src={navImg} width="100%" height="800px"></img></SwiperSlide>
   
    <SwiperSlide   className='slide'><img src={navImg1} width="100%" height="800px"></img></SwiperSlide>

    <SwiperSlide   className='slide'><img src={navImg2} width="100%" height="800px"></img></SwiperSlide>
    <SwiperSlide   className='slide'><img src={navImg3} width="100%" height="800px"></img></SwiperSlide>
    <SwiperSlide   className='slide'><img src={navImg4} width="100%" height="800px"></img></SwiperSlide>
    <SwiperSlide   className='slide'><img src={navImg5} width="100%" height="800px"></img></SwiperSlide>
    <SwiperSlide   className='slide'><img src={navImg6} width="100%" height="800px"></img></SwiperSlide>
    
    </Swiper></></div>
  )
}

export default Swipers