import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Layyerimg from "../public/img/layer.png"
import {Getnftmetadata} from "../hook/Getnftdata"
import style from "../components/CSS/nft.module.css"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import Site_logo from "../public/img/LOGO.png"
import {ConvertLink} from "../hook/Useipfslink"
import { FaEthereum } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import {Listed_Token as useWrite,NFT_CONTRACT_APPROVE} from "../hook/UserBalance"
import { QNFT,metadata } from '../typings'

export enum TypeNFT {
  auctionList="Auction",
  newList="Newlist",
  Sale="Onsale",
  auction="auction",
  bid="bid",
  newlist="newlist",
  recentsell="recentsell",
  slider="Trending"
}
type props ={
    nft:QNFT,
    which:String
    
    }
const NftCard = ({nft,which}:props) => {
console.log("nftdata",nft);


const {account,active,library} = useWeb3React()
const web3reactContext = useWeb3React();

  // console.log(nft.nft);
const [meta,setmeta] = useState<metadata | null>()
const router = useRouter();
const [loading,setLoading] = useState(false)
  //undefined
//accesing the token id!
const {tokenId,currentAskPrice:tokenprice,collection} = nft;

//accesing the collection addresss
const Collectionaddress = collection.id;


// console.log(nft);
const Ask = nft && nft.askHistory;
const finalLink = Ask && Ask[0].auctionenable;

  
useEffect(()=>{
  let run = false;
  if(!run){
  fetch(`${ConvertLink(nft?.metadataUrl)}`)
      .then(response => response.json())
      .then(response => setmeta(response))
      .catch(err => console.error(err));
  }
  return()=>{
    run = true;
  }
},[nft])



const Delist = async()=>{
  setLoading(true)
   await useWrite(web3reactContext,[Collectionaddress,tokenId],"delistToken",true);
   setLoading(false);
   router.push("/Mynft/NFT")
}


console.log(Ask);


   
  return (

    <div className='bg-white	relative m-5 p-2 rounded-lg object-contain	min-w-fit shadow-md bg-blend-multiply border hover:opacity-75		'  id={style.main}>
     <Link href={`/collection/${Collectionaddress}/${tokenId}/${finalLink==0?TypeNFT.newList:TypeNFT.auctionList}`}>

{/* nft  */}

<div>


{/* dynamic view */}
{which == TypeNFT.Sale || which == TypeNFT.bid ||  which == TypeNFT.slider?<div className="absolute flex gap-2 items-center top-4 left-4 py-2 px-4 bg-black bg-opacity-50 rounded-lg z-10 backdrop">
  <svg viewBox="0 0 16 18" fill="white" xmlns="http://www.w3.org/2000/svg" height="18"><path d="M11.556 1.8a21.14 21.14 0 0 0-2.008 2.108A27.424 27.424 0 0 0 6 0C2.49 3.205 0 7.381 0 9.9 0 14.374 3.582 18 8 18s8-3.626 8-8.1c0-1.873-1.856-5.735-4.444-8.1Zm-.696 11.976a4.853 4.853 0 0 1-2.758.849c-2.577 0-4.673-1.678-4.673-4.403 0-1.358.868-2.554 2.6-4.597.247.28 3.529 4.406 3.529 4.406l2.094-2.35c.148.24.282.476.402.701.977 1.835.565 4.183-1.194 5.394Z"></path></svg>
  <div className="font-semibold text-white">
    {which}</div></div>:null}

{/* dynamic view */}

{/* img */}
<LazyLoadImage placeholderSrc={Layyerimg.src} id="h_pic" className='rounded-lg border 		' src={meta && ConvertLink(meta.image)} 
width={254}
height={254}
/>
{/* img */}

{/* name  */}
<div className='pb-1'>
<p className='text-neutral-800	 font-medium font-sans	text-xs	'>#{nft && nft.tokenId}</p>
<h1 className='text-neutral-800		font-bold font-sans	text-lg	'> {meta && meta.name}</h1>
</div>
{/* name  */}

{/* listing price */}
{which==TypeNFT.newList?<div className='text-base flex gap-1 items-center	font-medium font-sans'><FaEthereum/>{nft && nft?.currentAskPrice} ETH</div>:<div className='flex justify-between items-center border-t pt-2 pb-1 border-slate-400	'>
 <h2 className='text-neutral-800  font-medium font-sans	text-xs'>Asking price</h2>   
<h2 className='text-base	font-bold		'>{nft && nft?.currentAskPrice} ETH</h2> 

{/* <h2 className='text-base	font-bold		'>{'50'} ETH</h2> */}
</div>
}

{/* listing price */}
</div>


</Link>
{which == TypeNFT.Sale && <button disabled={loading} onClick={()=>Delist()}  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delist</button>
}

{/* nft  */}

{/* <img alt="hey" src={Layyerimg.src}/> */}
    </div>
 
  )
}

export default NftCard