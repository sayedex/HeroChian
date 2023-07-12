import React from 'react'
import Link from 'next/link'
import imga from "../../public/img/banner.jpeg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
const StaticSection = () => {
  return (
    <div className='bg-white pb-10'>
      <div>
{/* text */}
<div className='flex flex-col-reverse  md:flex-row pt-20 pl-5 pb-5 pr-5  gap-y-10 max-w-7xl m-auto justify-around items-center gap-x-6	'> 
{/* text componet */}

<div className='flex flex-col gap-y-3 md:w-2/4 	'>
<h1 className='text-[25px] leading-[30px] sm:text-[40px] sm:leading-[60px] font-bold	"
'>
    
   Browse Art for Sale by <br/>Featured Collections</h1>
<p className='leading-loose		 text-blacktext-sm antialiased font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

<div>
  <button className='bg-black	text-white p-3 rounded-sm'><Link href="/Newlist">Browse Products</Link></button>
</div>
</div>

{/* text */}
{/* img */}
<div>
<LazyLoadImage effect='blur' className='w-full		 sm:max-w-xl' src={imga.src}/>
</div>
{/* img */}



      </div>
    </div>
    </div>
  )
}

export default StaticSection
