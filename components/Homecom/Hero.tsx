
import React,{useEffect, useState,CSSProperties} from 'react'
import {NftSlider} from "../Homecom/Slide/NftSlider"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Hero = () => {
 
  
  return (
    <div>
        

<div className='flex flex-col md:flex-row pt-20 pl-5 pr-5 pb-10  gap-y-10 max-w-7xl m-auto justify-around items-center	'> 
{/* text componet */}

<div className='flex flex-col gap-y-3 md:w-2/4	'>
<h1 className='text-[40px] leading-[48px] sm:text-[72px] sm:leading-[81px] font-bold	"
'>
    
    Enjoy 15% sale<br/>this Friday</h1>
<p className='text-gray-800  max-w-[500px] text-xl mb-4'>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  </p>

<div>
  <button className='hover:scale-105 transform bg-black text-white border border-black hover:dark:bg-opacity-95 rounded-[6px] w-52 py-3 transition-all"'><Link href="/Newlist">Explore now</Link></button>
</div>
</div>

{/* text componet */}
{/* this is nft slide */}
<NftSlider/>

{/* <Image/> */}
</div>




{/* img  */}



{/* img */}


    </div>
  )
}
