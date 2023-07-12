import React, { useEffect, useState } from 'react'
import Boxplaceholder from "../Boxplaceholder"
import { MdLabel } from "react-icons/md";
import { metaurl } from '../../typings';
type props ={
  meta:metaurl,
  
  }
 const Properties : React.FC<any> = (attribute:props) => {
  const {attributes} = attribute.meta;
  return (

    <div className=' border  rounded-lg  bg-white md:w-5/12 h-fit'>
           
        <div className="flex justify-between rounded-t-lg  bg-gray-100 cursor-pointer transition-colors p-4">
        <div className="flex gap-4 flex-row"><div className='flex flex-row gap-x-4 items-center'>
          <MdLabel className='text-3xl text-gray-700	'/> Properties</div>
    </div>
    </div>
        
       <div>
       {!attributes && <Boxplaceholder/>}
       <div className='grid grid-cols-2 md:grid-cols-3 gap-2 p-2 '>
       {attributes && attributes.map((e)=>{

        return (
        
        <div className='group border bg-white relative rounded py-4 px-4 text-center'>
            <h2 className="whitespace-nowrap text-ellipsis overflow-hidden text-xs text-gray-500">{e.trait_type}</h2>
            <h1 className='whitespace-nowrap text-ellipsis overflow-hidden text-sm'>{e.value}</h1>
        </div>
    
        )
    })} 
    
    </div>
       </div>
    
    
    
    </div>
  )
}

export default Properties;