import React,{useEffect, useState,CSSProperties} from 'react'
import {NFT} from "../../graphql/Queries"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  NetworkStatus
} from "@apollo/client";
//for testing
import { useSelector, useDispatch } from 'react-redux';
import Nft from "../../components/NftCard"
import Listing from "../Newlist/Listing";
import Statichome from "./Statichome"
import PropagateLoader from "react-spinners/PropagateLoader";
import {NFTPlaceholder} from "../../components/LazyLoad/Box"
import {add_ALL} from "../../Store/Newlist"


export const index = () => {

const dispatch = useDispatch()
  // const [Auction,setAuction] = useState<NFT[]  | null>([])
  const { data, loading, networkStatus, error, refetch,fetchMore} = useQuery(NFT, {
    notifyOnNetworkStatusChange: true,
    variables: {  first: 40,skip: 0,isauction:0},
    fetchPolicy: 'network-only',
    nextFetchPolicy:"network-only"
   
  });




useEffect(()=>{
  dispatch(add_ALL(data && data.nfts))
},[data])


const LoadMore = async()=>{
  const currentLength = data.nfts.length || 0;
  await fetchMore({
    variables: {
         first:  40,
         skip:currentLength,
         isauction:0
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
     if (!fetchMoreResult) { return previousResult; }
     return Object.assign({}, previousResult, {
       nfts: [...previousResult.nfts, ...fetchMoreResult.nfts],
     });
   },

       } )
}


return (

<div className='min-h-screen	'>

<Statichome/>

{<Listing/>}
<div className='m-auto text-center	mt-20'>
{!data && <NFTPlaceholder/> }
{data && <button type="button" onClick={()=>LoadMore()} className="m-auto text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Load more</button>
}
</div>

<div className='flex m-auto justify-center p-10'>
<PropagateLoader color={"#000000"} loading={loading} size={10} />
</div>
{/* {networkStatus != 7? <div className='flex m-auto justify-center p-10'>
<PropagateLoader color={"#000000"} loading={true} size={10} />
</div>:null} */}



</div>
  )
}

export default index;