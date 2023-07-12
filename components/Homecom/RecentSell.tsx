import React, { useEffect, useState } from 'react'
import {RecentSell as sell} from "../../graphql/Queries"
import {NFTPlaceholder} from "../LazyLoad/Box"
import {useGQLQuery} from "../../hook/useGQLQuery"
import {Slider}  from "./Slider"
import {TypeNFT} from "../NftCard"
const RecentSell = () => {

     const {data,loading} = useGQLQuery(sell,{
      variables: {  first: 10,skip: 0}
     })

const Data = data?data.transactions:null;
const transaction = Data?Data[0]:null

  return (
      <div className='pt-10 pb-10'>
          <div>
    <h1 className='font-bold m-auto text-xl relative w-fit 	md:text-2xl	'>Recent Sales
 </h1>
</div>
{loading && <NFTPlaceholder/> }
{ !loading && Data &&    <Slider data={Data} which={TypeNFT.recentsell}/>}

    </div>


  )
}

export default RecentSell
