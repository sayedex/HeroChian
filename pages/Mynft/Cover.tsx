import React from 'react'
import Image from 'next/image'
import {Tab} from '../../components/tab';
import { useWeb3React } from "@web3-react/core";

const Cover = () => {
const {account} = useWeb3React()
  return (
    <div>
      
{/* cover */}
<div className=' p-3 '>

<div className='bg-black h-28 relative -z-10	 rounded-2xl md:h-64'>

</div>
<div className="drop-shadow-md  border-2 md:border-4 relative h-20 w-20 md:h-32 md:w-32 rounded-full border-gray-300 bg-slate-400 overflow-hidden -mt-6 ml-2 md:ml-5 md:-mt-12">
 <Image src={`https://avatars.dicebear.com/api/pixel-art-neutral/${"sas" || "pleaceholder"}.svg`} layout="fill"/> 
   </div>
  <div className='p-2 w-fit mt-2 '> {account && account.slice(1,5)+"..."+ account.slice(-5)}</div> 

</div>

{/* cover */}


{/* tab */}
<Tab/>

{/* tab */}

    </div>
  )
}

export default Cover
