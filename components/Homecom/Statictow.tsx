import React from 'react'
import img1 from "../../public/icon/Activity.png"
import img2 from "../../public/icon/Buy.png"
import img3 from "../../public/icon/Swap.png"
import img4 from "../../public/icon/Wallet.png"
const Data = [
    {
h:"Setup your wallet",
p:"A doodley box of genesis edition wearables for Doodles 2, containing a rare assortment of apparel and accessories.",
icon:img1.src
    },
    {
        h:"Setup your wallet",
        p:"A doodley box of genesis edition wearables for Doodles 2, containing a rare assortment of apparel and accessories.",
        icon:img2.src
            },
            {
                h:"Setup your wallet",
                p:"A doodley box of genesis edition wearables for Doodles 2, containing a rare assortment of apparel and accessories.",
                icon:img3.src
                    },
                    {
                        h:"Setup your wallet",
                        p:"A doodley box of genesis edition wearables for Doodles 2, containing a rare assortment of apparel and accessories.",
                        icon:img4.src
                            },
]




const Statictow = () => {
  return (
    <div className='max-w-7xl m-auto p-10'>
        <h1 className='mt-2 mb-2 text-center font-bold  text-xl relative w-fit m-auto md:text-2xl '>Create and sell your NFTs</h1>
      <div className='flex justify-center gap-x-4 gap-y-4 flex-wrap pt-10 pb-10'>

{Data && Data.map((e:any,index:any)=>{

return (
    <div className='w-72 text-center flex justify-center gap-y-2 flex-col bg-white pt-8 pb-8 pl-4 pr-4 rounded-lg'> 

<img className='m-auto' src={e.icon} />
<h1 className='text-lg font-sans font-bold'>{e.h}</h1>
<p className=' text-inherit	 text-blacktext-sm antialiased font-sans text-xs' >{e.p}</p>

    </div>
)

})}


      </div>
    </div>
  )
}

export default Statictow
