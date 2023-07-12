import React from 'react'
import {NftSlider} from "../../components/Homecom/Slide/NftSlider"
import {TypeNFT} from "../../components/NftCard"
const Statichome = () => {
  return (
    <div>
        

    <div className='flex flex-col md:flex-row pt-20 pl-5 pr-5  gap-y-10 max-w-7xl m-auto justify-around items-center	'> 
    {/* text componet */}
    
    <div className='flex flex-col gap-y-3 md:w-2/4	'>
    <h1 className='text-[40px] leading-[48px] sm:text-[72px] sm:leading-[81px] font-bold	"
    '>
        
        Enjoy 15% sale<br/>this Friday</h1>
    <p className='leading-loose		 text-blacktext-sm antialiased font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    
    </div>
    
    {/* text componet */}
    {/* this is nft slide */}
    <NftSlider which={TypeNFT.newList}/>
    
    {/* <Image/> */}
    </div>
    
    
    
    
    {/* img  */}
    
    
    
    {/* img */}
    
    
        </div>
  )
}

export default Statichome
