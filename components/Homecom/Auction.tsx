
import {nfts} from "../../graphql/Queries"
import Link from 'next/link';
import {NFTPlaceholder} from "../LazyLoad/Box"
import {useGQLQuery} from "../../hook/useGQLQuery"
// Import Swiper styles
import {Slider}  from "./Slider"
const Auction = () => {
   
const {data, loading} = useGQLQuery(nfts,{
  variables: {  first: 20,skip: 0 ,isauction:1},
})



    //  if (data) {
    //     console.log(data.nfts.length);
    //   }




  return (
      <div className='pt-10 pb-10 max-w-7xl m-auto'>
          <div>
    <h1  className='font-bold m-auto text-xl relative w-fit 	md:text-2xl	'>Latest Auctions
 </h1>
</div>
{loading && <NFTPlaceholder/> }
     {!loading && data && <Slider data={data.nfts} which={"newlist"}/>}
     <div className='flex justify-center'><button className='mt-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'><Link href="/Auction">Browse All</Link></button></div>

    </div>
  )
}

export default Auction


{/* <div className='flex justify-center flex-wrap mt-5'>
{data && data.nfts.map((e:any,index:any)=>{
return <Nft key={index} nft={e} which={"newlist"}/>

})
}



</div> */}