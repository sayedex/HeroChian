import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import Site_logo from "../../public/img/LOGO.png"

import Image from 'next/image';
const about =[

{
    name:"Contact",
    link:"asas"
},
{
    name:"Blog",
    link:"asas"
},

{
    name:"Community",
    link:"asas"
},
{
    name:"Litepaper",
    link:"asas"
},

]

const help = [

    {
        name:"Customer Support",
        link:"asas"
    },
    {
        name:"Troubleshooting",
        link:"asas"
    },
    
    {
        name:"Guides",
        link:"asas"
    },
  
    
    ]

    const Developer = [

        {
            name:"Github",
            link:"asas"
        },
        {
            name:"Documentation",
            link:"asas"
        },
        
        {
            name:"Sayed",
            link:"asas"
        },
        
        ]
    

const Ft = () => {
  return (
      <div className='p-5 bg-white m-auto sm:p-10 border-t-2'>
    <div className="max-w-7xl mx-auto  pt-10 pb-10">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

<div>
<h2 className='font-bold text-black ext-lg'>About</h2>
<ul>
{about && about.map((e,index)=>{
   return<div key={index}><li>
     <a className='font-sans font-medium text-sm pb-5 text-black' href={e.link}>  {e.name}</a></li></div> 
})}

</ul>
</div>



<div>
<h2 className='font-bold text-black text-lg'>Help</h2>
<ul>
{help && help.map((e,index)=>{
   return<div key={index}><li>
     <a className='font-sans font-medium text-sm pb-5 text-black' href={e.link}>  {e.name}</a></li></div> 
})}

</ul>
</div>


<div>
<h2 className='font-bold text-black ext-lg'>Developer</h2>
<ul>
{Developer && Developer.map((e,index)=>{
   return<div key={index}><li>
     <a className='font-sans font-medium text-sm pb-5 text-black' href={e.link}>  {e.name}</a></li></div> 
})}

</ul>
</div>

<div className='m-auto'>

<Image src={Site_logo} 
 width={100}
 height={40}

/>
<div className='flex gap-x-3 justify-center'>
  <a href="http://">  <AiFillFacebook className='text-2xl	antialiased text-gray-800	'/></a>
  <a href="http://"><AiFillTwitterCircle className='text-2xl	antialiased text-gray-800	'/></a>
  <a href="http://"> <AiFillInstagram className='text-2xl	antialiased text-gray-800	'/></a>
</div>

</div>

      </div>
      
    </div>


<div className='border-t-2 pt-3'>

<p className='text-center'>© 2023 Build By jacksonart</p>

</div>

    </div>
  )
}

export default Ft
