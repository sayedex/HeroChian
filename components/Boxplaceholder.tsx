import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Boxplaceholder = () => {
  return (
    <div>
      <Skeleton  borderRadius={20} height={30} count={8}  highlightColor="#b0a7a7" baseColor="#e7e7e7"/>
             
    
    </div>
  )
}

export default Boxplaceholder
