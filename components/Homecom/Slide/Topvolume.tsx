import React,{useState,useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgd from "../../../public/img/banner-lg.webp"
import test from "../../../public/slider/1.png";
import { ConvertLink } from '../../../hook/Useipfslink';
import { metadata } from '../../../typings';
 export const Topvolume = (info:any) => {
   //console.log(info.info);
   const [meta,setmeta] = useState<metadata | null>()
   useEffect(()=>{

    let run = false;
     if(!info.info){
       return
     }
if(!run){
  fetch(`${ConvertLink(info.info.nfts[0].metadataUrl)}`)
  .then(response => response.json())
  .then(response => setmeta(response))
  .catch(err => console.error(err));
}


return()=>{
  run=true
}

  },[info.info])
  return (
     
      
    <div className='max-w-sm bg-white rounded-lg shadow-xl hover:scale	border'>

{/* box */}
<div>
{/* img */}

<div>
<LazyLoadImage className='rounded-2xl p-2	' src={imgd.src}></LazyLoadImage>
<div className='-mt-10 ml-4 w-14 '>
<LazyLoadImage placeholderSrc='https://avatars.dicebear.com/api/pixel-art-neutral/sadsd22s.svg' width={56} height={56} className='rounded-2xl border-2 drop-shadow-md md:border-2' src={meta && ConvertLink(meta.image)}></LazyLoadImage>
</div>
</div>
{/* img */}

{/* text */}
<div className='flex justify-between p-4 items-start'>
<div className=' flex flex-col justify-start'>
<h1 className='font-bold antialiased font-sans		'>{info && info.info.symbol}</h1>
<p className='text-sm antialiased font-sans			'>{info && info.info.numberTokensListed} items</p>
</div>

<div>
<h1 className='font-bold antialiased font-sans		'>Total Volume</h1>
<p className='text-sm antialiased font-sans			'>{info && info.info.totalVolumeBNB} ETH</p>
</div>

</div>

{/* text */}

</div>
{/* box */}



    </div>
  )
}
