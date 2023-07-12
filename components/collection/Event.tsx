import React from 'react'
import TimeAgo from 'react-timeago'
import Boxplaceholder from "../Boxplaceholder";
import { QNFT } from '../../typings';
interface Props{
    nft:QNFT[]
}
 const Event = (data:Props) => {
const {transactionHistory,askHistory} = data.nft && data.nft[0];
     
  return (
    <div className=' bg-white  rounded-lg  border mb-5'>
    {/* header */}
    <div className="flex justify-between rounded-t-lg  bg-gray-100 cursor-pointer transition-colors p-4">
        <div className="flex gap-4"><div>TransactionHistory</div>
    </div>
    </div>
    {/* header */}


<div className="relative overflow-x-auto p-2">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  Event
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    From
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>

            {askHistory && askHistory?.map((e:any)=>{

                return  <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
                {e.orderType} order
                </th>
                <td className="px-3 py-4">
                {e.askPrice}
                </td>
                <td className="px-3 py-4">
                {e.seller.id.slice(1,4) +"..."+ e.seller.id.slice(-3)}
                </td>
                <td className="px-3 py-4">
                 <TimeAgo date={e.ontime*1000}/>
                </td>
            </tr>
            })
            }
{ transactionHistory &&  transactionHistory?.map((e:any)=>{
return(
<tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
                {e.TransactionName} order
                </th>
                <td className="px-3 py-4">
                {e.askPrice}
                </td>
                <td className="px-3 py-4">
                {transactionHistory && e.buyer.id.slice(1,4) +"..."+ e.buyer.id.slice(-3)}
                </td>
                <td className="px-3 py-4">
                 <TimeAgo date={e.timestamp*1000}/>
                </td>
            </tr>

)

})}


        </tbody>
    </table>
</div>
{!askHistory && <Boxplaceholder/>}





    </div>
  )
}
export default Event;