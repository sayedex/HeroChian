import React,{useEffect,useMemo,useContext, useState} from 'react'
import TimeAgo from 'react-timeago'
import { useRouter } from 'next/router'
import { MARKET_CONTRACT } from '../../Config/contract';
import { formatEther,parseEther,parseUnits ,} from '@ethersproject/units';
import toast from 'react-hot-toast';
import {NFT_CONTRACT,WETH_CONTRACT,Listed_Token} from "../../hook/UserBalance"
import { useWeb3React } from "@web3-react/core";
import { QNFT } from '../../typings';
interface props {
    nfts:QNFT[]
  }
 const Bidoffer = (data:props) => {
 
    //hook from web3react
    const {account} = useWeb3React()
    const web3reactContext = useWeb3React()
    const router = useRouter()
    const { nft:NFT } = router.query;
    const [loading,setloading] = useState(false)
    const Erc721 = NFT && NFT[0]
    const Tokenid = NFT && NFT[1]
   
const currentSeller = data.nfts[0].currentSeller;
const bidowner =data.nfts &&  data.nfts[0]?.bidder[0]?.bidowner;
const bidprice =data.nfts &&  data.nfts[0]?.bidder[0]?.bidprice;
const time = data.nfts&&  data.nfts[0]?.bidder[0]?.timestamp;



//accecpt bid ..
//  await Listed_Token(web3reactContext,[erc721,tokenid,value,date],"enterBidForToken",false);
//acceptBidForToken(ERC710,tokenId,bidder,Value)
const BidConfirm =async()=>{
    if(!bidowner && !bidprice){
        return;
    }
    const value = bidprice && parseUnits(bidprice.toString())
    await setloading(true)
    await Listed_Token(web3reactContext,[Erc721,Tokenid,bidowner,value],"acceptBidForToken",false);
    await setloading(false);
    await router.push("/")
}

//cancel bid
//withdrawBidForToken(ERC710,tokenId)
const CancelBid = async()=>{
    if(!bidowner && !bidprice){
        return;
    }
    const value = bidprice && parseUnits(bidprice.toString())
    await setloading(true)
    await Listed_Token(web3reactContext,[Erc721,Tokenid],"withdrawBidForToken",false);
    await setloading(false);
    await router.push("/")
}


    //  console.log(bidder);
  return (<>{bidprice && 
    <div className='bg-white  rounded-lg  border'>
    {/* header */}
    <div className="flex justify-between rounded-t-lg  bg-gray-100 cursor-pointer transition-colors p-4">
        <div className="flex gap-4"><div>Top Bidder</div>
    </div>
    </div>
    {/* header */}

<div className="relative overflow-x-auto w-full m-auto p-2">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='w-full'>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Expire
                </th>
                <th scope="col" className="px-6 py-3">
                    From
                </th>
        
            </tr>
        </thead>
        <tbody>
     <tr className="bg-white border-b dark:bg-gray-800 w-full">
                <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
                {bidprice && bidprice} 
                </th>
                <td className="px-3 py-4">
      {<TimeAgo date={time && time*1000}/>}
                </td>
                <td className="px-3 py-4">
                {bidowner && bidowner?.slice(1,5) +"..."+ bidowner?.slice(-3)}
                </td>
              


             

            </tr>
        


        </tbody>
    </table>
<div className='flex'>
{bidowner?.toLowerCase() == account?.toLowerCase() &&
          <div className='px-3 py-4'>
<button onClick={()=>CancelBid()} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
 focus:outline-none focus:shadow-outline'>
    Cancel
    </button>
</div>

}
{bidowner?.toLowerCase() == account?.toLowerCase() && <div className="px-3 py-4">
                <div>
               <button onClick={()=>BidConfirm()} className=' bg-blue-500 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
               Accept</button>
              </div>
           
           
        
                </div>
 }


</div>


</div>



    </div>
  } </>
  )
}
export default Bidoffer