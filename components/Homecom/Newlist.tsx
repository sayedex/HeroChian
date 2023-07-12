import React, { useEffect, useState } from 'react'
import {nfts} from "../../graphql/Queries"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  NetworkStatus
} from "@apollo/client";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useMediaQuery } from 'react-responsive'
import {NFTPlaceholder} from "../LazyLoad/Box"
import {TypeNFT} from "../NftCard"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Slider}  from "./Slider"
import Link from 'next/link';
import { QNFT } from '../../typings';
const Newlistcomponent = () => {
    const [Auction,setAuction] = useState<QNFT[]  | null>([]);
    const [count,setcount] = useState(0)
    // const [skipcount,setskipcount] = useState(0)
    const { data, loading, networkStatus, error, refetch,fetchMore } = useQuery(nfts, {
        notifyOnNetworkStatusChange: true,
        variables: {  first: 20,skip: 0 , isauction:0},
        fetchPolicy: 'network-only',
        // nextFetchPolicy: 'cache-first',

     });
     useEffect(()=>{
if(data){
    setAuction(data.nfts);
 
    
}


     },[data])

 
     
    //  if (data) {
    //     console.log(data.nfts.length);
    //   }

    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    const Tab = useMediaQuery({ query: '(min-width: 768px)' })


  return (
      <div className='pt-10 pb-10 max-w-7xl m-auto'>
          <div>
    <h1  className=' relative w-fit m-auto md:text-2xl mb-4 text-2xl font-bold	'>Latest listings
 </h1>
</div>
{loading && <NFTPlaceholder/> }
     {!loading && data && <Slider data={data.nfts} which={TypeNFT.newlist}/>}
<div className='flex justify-center'><button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'><Link href="/Newlist">Browse All</Link></button></div>
    </div>
  )
}

export default Newlistcomponent


{/* <div className='flex justify-center flex-wrap mt-5'>
{data && data.nfts.map((e:any,index:any)=>{
return <Nft key={index} nft={e} which={"newlist"}/>

})
}



</div> */}