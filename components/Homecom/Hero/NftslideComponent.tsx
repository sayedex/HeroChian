import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Layyerimg from "../../../public/img/layer.png"
import {Getnftmetadata} from "../../../hook/Getnftdata"
//FaEthereum
import { FaEthereum } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import {ConvertLink} from "../../../hook/Useipfslink"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import Site_logo from "../public/img/LOGO.png";
import { TypeNFT } from '../../NftCard';
import Box from "../../LazyLoad/Box"
import { QNFT ,metadata} from '../../../typings';
    interface props {
    nft:QNFT,
    }


export const NftslideComponent = (nft:props) => {
  console.log("heysayed0",nft);
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const isSmallscreeen = useMediaQuery({ query: '(max-width: 768px)' })
  // console.log(nft.nft);
  const [meta,setmeta] = useState<metadata>()
  const router = useRouter();
//is img loaded or not..
const [imgload,setimgload] = useState(false)

  //undefined
//accesing the token id!
const {tokenId,currentAskPrice:tokenprice,collection} = nft.nft;


//accesing the collection addresss
const Collectionaddress = collection.id;
const askHistory = nft.nft?.askHistory[0].auctionenable;
const link = router.query.collections ? nft.nft?.id:Collectionaddress?.id;

  
useEffect(()=>{
  let run = false;
  if(!run){
    fetch(`${ConvertLink(nft.nft?.metadataUrl)}`)
    .then(response => response.json())
    .then(response => setmeta(response))
    .catch(err => console.error(err));
  }
  return()=>{
    run = true
  }

},[nft])



   
  return (

<div className='relative max-w-[250px] group p-5 rounded-xl cursor-pointer transition-all table w-fit bg-white dark:bg-white dark:bg-opacity-10 backdrop-blur-xl border dark:border-gray-600  ' >
     <Link href={`/collection/${Collectionaddress}/${tokenId}/${askHistory==0?TypeNFT.newList:TypeNFT.auctionList}`}>

{/* nft  */}

<div>
{/* img */}
{/* {!imgload && <Box/>} */}
<LazyLoadImage effect='blur' height={isSmallscreeen?230:300} width={isSmallscreeen?230:300}   afterLoad={()=>setimgload(true)} placeholderSrc={Layyerimg.src}   className='rounded-lg border' src={meta && ConvertLink(meta.image)} 
/>

{/* img */}
<div className="absolute flex gap-2 items-center top-4 left-4 py-2 px-4 bg-black bg-opacity-50 rounded-lg z-10 backdrop">
  <svg viewBox="0 0 16 18" fill="white" xmlns="http://www.w3.org/2000/svg" height="18"><path d="M11.556 1.8a21.14 21.14 0 0 0-2.008 2.108A27.424 27.424 0 0 0 6 0C2.49 3.205 0 7.381 0 9.9 0 14.374 3.582 18 8 18s8-3.626 8-8.1c0-1.873-1.856-5.735-4.444-8.1Zm-.696 11.976a4.853 4.853 0 0 1-2.758.849c-2.577 0-4.673-1.678-4.673-4.403 0-1.358.868-2.554 2.6-4.597.247.28 3.529 4.406 3.529 4.406l2.094-2.35c.148.24.282.476.402.701.977 1.835.565 4.183-1.194 5.394Z"></path></svg>
  <div className="font-semibold text-white">
    Trending</div></div>
{/* name  */}
<div className='flex pt-6 pb-2 justify-between items-end'>

<div className='pb-1'>
<h1 className='text-neutral-800	 font-medium font-sans	text-sm	'>#{nft.nft && nft.nft.tokenId}</h1>
<h1 className='text-neutral-800		font-bold font-sans	text-lg	'> {meta && meta.name}</h1>
</div>



<div className='flex items-center gap-1'><FaEthereum/>
<h1>{nft.nft && tokenprice}</h1> 
</div>
</div>
{/* name  */}
</div>


{/* nft  */}
</Link>
{/* <img alt="hey" src={Layyerimg.src}/> */}
    </div>
 
  )
}


