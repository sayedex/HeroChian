import React from 'react'
import Nft from "../NftCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useMediaQuery } from 'react-responsive'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {TypeNFT} from "../NftCard"
export const Slider = (data:any) => {  
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
const Tab = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div className='flex justify-center flex-wrap mt-5 max-w-7xl m-auto'>
    <Swiper
        slidesPerView={isBigScreen==true?4:Tab==true?3:1}
        spaceBetween={20}
        navigation={true}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}

        autoplay={true}
        
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
     
         {data && data.data.map((e:any)=>{
            return        <SwiperSlide><Nft nft={data.which==TypeNFT.newlist?e:data.which==TypeNFT.recentsell?e.nft:e.nft} which={data.which}/></SwiperSlide>
        })}  
      </Swiper>

    </div>

  )
}
