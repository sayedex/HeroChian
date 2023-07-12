import React, { useEffect, useState } from 'react'
import Nftinfo from "./Nftinfo"
import Metadata from "./Metadata"
import Nftimg from './nftimg'
import Properties from "./Properties"
import Bidoffer from "./Bidoffer"
import Event from "./Event"
import { Getnftmetadata } from '../../hook/Getnftdata';
import {NFT,GetNFTBYCOllection} from "../../graphql/Queries"
import { useRouter } from 'next/router'
import Boxplaceholder from "../Boxplaceholder";
import {resolveLink} from "../../hook/useLink";
import {ConvertLink} from "../../hook/Useipfslink"
import { useGQLQuery } from '../../hook/useGQLQuery';
import ScaleLoader from "react-spinners/ScaleLoader";
import { GetNFTBYCOllection as GetCOllection,nftdata } from '../../typings'
interface props{
  collection_data:GetCOllection[],
  loading:boolean
}

 const Main=(data:props) => {
// This function will update whole state..

const {id,nfts} =data.collection_data &&  data.collection_data[0]
// console.log(collection&& collection.collections[0]);
const [metauri,setmetauri]  = useState<nftdata>();
const {metadataUrl} = nfts[0];
// console.log(collection_data);
console.log(metadataUrl);


// console.log(metaurl);


// console.log("Properties");
const update  =async ()=>{
  metadataUrl &&  Getnftmetadata(`${ConvertLink(metadataUrl)}`).then((message) => { 
    setmetauri(message)
    }).catch((message) => { 
console.log(message);

    });

  // setinfo({url:url,collect:meta});

}
useEffect(()=>{
  update();
},[data.collection_data])


  return (
   <div className='p-3 pt-5 bg-white pb-44'>
   { <div className='flex justify-center pt-3	'>      <ScaleLoader color={"#000000"} loading={data.loading}  width={4} height={35} radius={2}/></div>}
 <div className='max-w-7xl flex flex-col  sm:w-5/6 justify-center  gap-x-7 items-center sm:pb-10 flex-wrap m-auto lg:flex-row	'>
{metauri && <Nftimg meta={metauri}/>}
{metauri && nfts &&  <Nftinfo metadataJson={metauri} nft={nfts}/>}
</div>
 <div className='max-w-7xl m-auto  flex flex-col pt-5 w-full md:flex-row  justify-center md:gap-x-10  sm:gap-x-3 gap-y-3'>

 {metauri && <Properties meta={metauri}/>}
<div className=' flex flex-col gap-y-5 md:w-5/12'>
{nfts &&  <Bidoffer nfts={nfts}/>}
{nfts &&  <Event nft={nfts}/> }
</div>
     </div>
     </div>
  )
}

export default Main;