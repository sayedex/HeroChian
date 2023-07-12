import React from 'react'
import bsc from "../../public/img/bsc.svg"
import Image from 'next/image'
import { Getnftmetadata } from '../../hook/Getnftdata'
const Metadata = () => {
  // console.log("Metadata");

  return (
    <div className=' max-w-xl bg-fuchsia-50  rounded-lg p-5 shadow-2xl'>

     <div>

       <h2>Description</h2>
       <p>Ordinary Octopus is an NFT collection of 10,000 cute pixel octopuses with different traits. They live underwater, love sandwiches and sweep PixelSweepers.
</p>

{/* link */}
<div className='flex gap-x-2'>

<a className='flex items-center gap-x-2' href="http://" target="_blank" rel="noopener noreferrer">
<Image src={bsc} width={20} height={20}  />
Contract

</a>



<a className='flex items-center gap-x-2' href="http://" target="_blank" rel="noopener noreferrer">
<Image src={bsc} width={20} height={20}  />
Contract

</a>
</div>

{/* link */}
     </div>

    </div>
  )
}

export default Metadata;