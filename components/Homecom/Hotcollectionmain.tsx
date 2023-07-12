import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useGQLQuery} from "../../hook/useGQLQuery"
import {HighestVolumeCollections,Hotcollection_A} from "../../graphql/Queries"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'react-responsive'
import {data} from "./data"
import {Topvolume} from "./Slide/Topvolume"
import {Gridbox} from "../LazyLoad/Box"
SwiperCore.use([Navigation,Pagination])
export const Hotcollectionmain = () => {
  const [loadplaceholder,setloadplaceholder] = React.useState(false)
  const { data:collection, loading:load, networkStatus, error, refetch } = useGQLQuery(Hotcollection_A,{
    first:20
  });
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    
  return (
      <div className='pt-16 max-w-7xl m-auto'>
{/* header */}
<div>
    <h1  className='font-bold m-auto text-xl relative w-fit 	md:text-2xl	'>Highest Volume Collections</h1>
</div>
{/* header */}
<div>
{load && <Gridbox/>}
</div>
  { !load &&  <div className='flex flex-wrap justify-center gap-x-5 gap-y-5 pt-5 m-5 p-5'>
    <Swiper
        slidesPerView={isBigScreen==true?3:1}
        spaceBetween={30}
        navigation={true}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}

        autoplay={true}
      speed={1000}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
     
        {collection && collection?.collections.map((e:any,index:any)=>{
            return        <SwiperSlide  key={index}><Topvolume  onLoad={()=>setloadplaceholder(true)} info={e}/></SwiperSlide>
        })}
      </Swiper>
    </div>}

    </div>
  )
}


//Hotcollection_A