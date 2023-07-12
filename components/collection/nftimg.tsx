import React,{useCallback,useState,useEffect} from 'react'
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layyerimg from "../../public/img/layer.png"
import {ConvertLink} from "../../hook/Useipfslink";
import { metaurl } from '../../typings';
type props ={
  meta:metaurl,
  
  }
 const Nftimg: React.FC<any>=(data:props) => {
  const {image}  = data.meta;

   

  return (
    <div className='flex-1 max-w-lg	 h-min	'>
      <LazyLoadImage  effect='blur' placeholderSrc={Layyerimg.src} 
      className='rounded-lg w-fit flex-1'
       src={ConvertLink(image)} 
    />
  </div>
  )
}
export default Nftimg;
