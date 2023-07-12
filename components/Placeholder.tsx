import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Placeholder = () => {
  return (
<div>
                <Skeleton  borderRadius={20} height={200}  baseColor="#e7e7e7" highlightColor="#b0a7a7" />
                <div className='-mt-10'>
     
     <Skeleton className=" z-1 w-20 md:w-28 	 drop-shadow-md	left-6		mtn ml-4	md:border-4	 "circle width={70} height={70} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>
    </div>
  <div className='mt-10'>  <Skeleton  borderRadius={20} height={100} highlightColor="#b0a7a7" baseColor="#e7e7e7"/></div>
    </div>
  )
}

export default Placeholder
// /baseColor="#a2a2a2"