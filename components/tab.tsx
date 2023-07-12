import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


 const tabdatA = [

    {name:"My NFTs",
    path:"/Mynft/NFT",

},
{
    name:"On Sale",
    path:"/Mynft/Sale",
  
},{
    name:"Bid",
    path:"/Mynft/Bid",

},
// {
//     name:"Settings",
//     path:"/sdsdds",
//     icon:<AiFillHome/>
// },
]
export const Tab = () => {
    const router = useRouter();
    // console.log(router.route);
    
  return (
    <div className='flex gap-x-5 pl-5 border-b-2 pb-2'>
      {tabdatA && tabdatA.map((e,index)=>{
            // console.log(router.route == e.path);
return (
    <div key={index} className={`  cursor-pointer pl-3 pr-3 pt-2 pb-2 rounded-full ${router.route == e.path? "bg-black text-white":"text-black"} hover:bg-slate-700 hover:text-white	`}>
    <Link href={e.path}><h1 className='antialiased font-mono text-sm	font-bold	'>{e.name}</h1></Link>
    
    </div>
    
    )
    
      })}
    </div>
  )
}


