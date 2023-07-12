import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
    NetworkStatus
  } from "@apollo/client";
import React,{useEffect, useState} from 'react'
import {GetCOllection,GET_FLOOR,Get_collection_NFT} from "../../graphql/Queries";
import Listing from "../Newlist/Listing";
import {add_ALL} from "../../Store/Newlist"
import {MainCollection} from '../../components/MainCollection'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { Getnftmetadata } from '../../hook/Getnftdata';
import { useGQLQuery } from "../../hook/useGQLQuery";
//import { InView } from "react-intersection-observer";
import {NFTPlaceholder} from "../../components/LazyLoad/Box";
import { NFT_Metada } from "../../typings";




 const collections= () => {
  const dispatch = useDispatch()
    const router = useRouter();
    const [infostate,setinfostate] = useState({
      data:null,
      loading:false
    });
    const { collections:url } = router.query

   

      const { data, error:errr,fetchMore:more} = useQuery(Get_collection_NFT, {
        notifyOnNetworkStatusChange: true,
        variables: { id:url, first: 40,skip: 0},
        fetchPolicy: 'network-only',
        nextFetchPolicy:"network-only"
       
      });
    
      const {data:FloorData,loading} = useGQLQuery(GET_FLOOR,{
        variables:{
            id:url
        }
    })


    
      
useEffect(()=>{
  let run = false
if(!run){
  dispatch(add_ALL(data && data.nfts))
}
  return()=>{
    run = true;
   
  }
},[data])




const Loadmore= async()=>{
  const currentLength = data.nfts.length || 0;

  await more({
    variables: {
        id:url,
       first:  40,
      skip:currentLength,
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
 <div className="">
<div className="bg-white	md:pl-16 md:pr-16 pb-6">
{FloorData &&  <MainCollection Data={FloorData?.collections} loading={loading} />  }
</div>
{!data && <NFTPlaceholder/> }
 <Listing />
<div className="m-auto text-center	mt-20 mb-5">
{data && <button type="button" onClick={()=>Loadmore()} className="m-auto text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Load more</button>
}
</div>
 

 </div>
  )
}
export default  collections;




