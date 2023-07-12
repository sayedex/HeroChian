import React,{useEffect, useState} from 'react'
import Cover from './Cover';
import Nftcom from "../../components/UserNft"
import abi from "../../Constants/abi/market.json"
import {MARKET_CONTRACT} from "../../Config/contract"
import {FetchUserdatas} from "../../graphql/Queries"
import GridLoader from "react-spinners/GridLoader";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector, useAppdispatch } from '../../hook/redux'
import {FetchuserNFT,addCard,setOpenmodel} from "../../Store/walletSlice"


// let web3Modal: Web3Modal | null
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  NetworkStatus
} from "@apollo/client";
import {GET_USER} from "../../graphql/Queries"
const NFT = () => {
  const {active,account} = useWeb3React();
  const {userNFT,userFetchNFT} = useAppSelector((state) => state.wallet);
const dispatch = useAppdispatch()
console.log("nft",userNFT);

useEffect(()=>{
  let run =false;
  if(!run){
  if(!account){
    return;
  }
  dispatch(FetchuserNFT(account))
}
return()=>{
  run = true
}
 
 // Call();
},[account]);





const Connectwithweb3 = ()=>{
  console.log("Sayed");
  dispatch(setOpenmodel())
  
}




  return (
    <div className='min-h-screen'>
<Cover/>
{/* <h1>{loading && <h1 className='flex justify-center p-10'>Loading..</h1>}</h1> */}

{active==false?<div className='text-center font-semibold'><div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>You need to connect your wallet</p>
</div></div>:null}
{!active && <button onClick={()=>Connectwithweb3()} className='m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Connect</button>}
{userFetchNFT==="LOADING" && <div className="h-auto flex justify-center pt-5"><GridLoader color={"#000000"} loading={true} size={10} /></div>}
{userFetchNFT==="ERROR" && <div className="h-auto flex justify-center pt-5">Something is wrong try again</div>}

{userFetchNFT==="IDLE" && userNFT && userNFT.length ==0? active && <div className='text-center font-semibold text-red pt-10'>You don't have any NFT yet!</div>:null}

{active && <div className='max-w-7xl mt-10 m-auto flex justify-center flex-wrap gap-y-5 gap-x-2 pb-20'>
{userFetchNFT==="IDLE" && userNFT && userNFT.map((e:any,index:any)=>{
return (
<Nftcom key={index} Data={e} />

)

})} 
</div>}
    </div>
  )
}

export default NFT
