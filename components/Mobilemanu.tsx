import React from 'react'
import {Headerdata} from "../components/Config/Headerdata"
import Link from 'next/link'
import style from "../components/CSS/Mobilemanu.module.css"
import Site_logo from "../public/img/LOGO.webp"
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
interface props{
manu:boolean,
turnOff: () => void
}
const Mobilemanu = (props:props) => {

  return (<div className='m-2 absolute inset-x-0 top-0 origin-top-right transform p-1 transition md:hidden'>
{props.manu && <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>


{/* manu header */}
<div className='flex justify-between items-center p-2 border-b-2'> 
<div id={style.site_logo} className="">
<Image src={Site_logo} 
 width={70}
 height={70}
/>

</div>
<div>
<IoClose onClick={props.turnOff} className='text-gray-400 text-3xl mr-3 cursor-pointer	'/> 
</div>



</div>


{/* manu header */}
      {Headerdata && Headerdata.map((e,indx)=>{

          return (
              <div key={indx} onClick={props.turnOff} className='text-gray-900 cursor-pointer font-sans font-semibold p-5 text-center hover:bg-gray-50'>
<Link href={e.path} className='text-gray-700 ml-3 text-base font-medium '>{e.name}</Link>

              </div>
          )
        
          
      })}
    </div>
}
    </div>
  )
}


export default Mobilemanu
