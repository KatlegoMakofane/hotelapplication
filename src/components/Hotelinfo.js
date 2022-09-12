import React from 'react'
import './Hotelinfo.css'

import car from "./video/vide01.mp4"
import navImg from "./images/back.jpeg"
import navImg1 from "./images/hotel2.jpg"
import navImg2 from "./images/hotel5.webp"
import navImg3 from "./images/hotel4.jpg"
import navImg4 from "./images/hotel6.webp"
import navImg5 from "./images/hotel7.jpg"
import navImg6 from "./images/hotel8.jpg"
import { ServiceItems, ServiceItems1 } from './ServicesItems'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Hotelinfo() {

  const video=car;
  return (
   
      
        <div className='disc'>
           <div className='discContainer' color='yellow' width="200px" height='200px'   position="absolute"></div>
                <h1>THE CHASEFIRE HOTEL</h1>
                  <div className="discDiscpt">
                    <h1> THE  EXPERIENCE  AT   THE  CHASEFIRE   HOTEL   IS QUITE THE EVENT COME     
                      AND ENJOY A DAY WITH US Extend your visit to Africa with the experience of a lifetime and journey by road or by air to Shambala Private Game Reserve. Shambala is situated on almost 10 000 hectares in the Limpopo Province.
                    </h1>
                </div>
           <div className="vidoec">
                     <video width="100%" height="100%" controls>
                          <source src={video} type="video/mp4" />
                      </video>

            </div>
          <div>

          </div>
        <div className='circle'>
        <h1 >HOTEL ROOMS</h1>
       <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={10}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
  >
    
  <SwiperSlide   className='slides' > <div className='roomname'>Single Room</div><img src={navImg1} width="80%" height="600px" ></img></SwiperSlide>
  <SwiperSlide   className='slides'> <div className='roomname'>Double Room</div><img src={navImg2} width="80%" height="600px" border='5px'></img></SwiperSlide>
  <SwiperSlide   className='slides'> <div className='roomname'>Luxury Room</div><img src={navImg3} width="80%" height="600px" border='5px'about></img></SwiperSlide>
  <SwiperSlide   className='slides'> <div className='roomname'>family Room</div><img src={navImg4} width="80%" height="600px" border='5px'></img></SwiperSlide>
  <SwiperSlide   className='slides'> <div className='roomname'>Presedent Room</div><img src={navImg6} width="80%" height="600px" border='5px'></img></SwiperSlide>
    
    
    </Swiper>
  
        </div>
        <div className='servicesContainer'>
          <h1>SERVICES</h1>
         <div className='servicesItems'>
         
          
            
          <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={100}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
  >
    
  <SwiperSlide    className='scroll'>  
      {ServiceItems.map((item,index)=>{ 
            return(  
            <li key={index}  >
                     <div className='SerCon'>
                         <div className='Sertitle'>{item.title }
                             </div> <img src={item.image} width="400px" height={550}  display="inline-flex">

                             </img>
                     </div>
              </li>)})} 
                   
                   </SwiperSlide>
               
  <SwiperSlide    className='scroll'>
      {ServiceItems.map((item,index)=>{ 
          return(  
              <li key={index}  >
                   <div className='SerCon'><div className='Sertitle'>{item.title }</div>  <img src={item.image} width="400px" height={550}  display="inline-flex"></img></div>
                    
             </li>)})} 
                      </SwiperSlide>               
  
                      <SwiperSlide    className='scroll'>{ServiceItems1.map((item,index)=>{ return(  
                        <li key={index}  >
                               <div className='SerCon'>     
                                  <div className='Sertitle'>{item.title }
                                  </div>   
                                     <img src={item.image} width="400px" height={550}  display="inline-flex"></img>
                                 </div>
                        </li>)})} 
                      </SwiperSlide>
    </Swiper>
          
          
                    
         
          </div> 
        </div>
        </div>
       
  )
}

export default Hotelinfo