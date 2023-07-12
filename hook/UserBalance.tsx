import type { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts';
//import { formatEther } from '@ethersproject/units'
//import type { Web3ReactHooks } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { formatEther,parseEther,parseUnits ,} from '@ethersproject/units';
import toast from 'react-hot-toast';
import {getmainContract,GetErc721Contract,increaseGasLimit,GetWeth} from "../hook/contractcall";
import { useRouter } from 'next/router';
function useBalances(
  provider?:any,
  account?: any
): BigNumber | undefined {
  const [balances, setBalances] = useState<BigNumber | undefined>()

  useEffect(() => {
    if (provider && account) {
      let stale = false

       provider.getBalance(account).then((balances:any) => {
        if (stale) return
        setBalances(balances)
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, account])

  return balances
}
export default useBalances;





//Listed token

export const Listed_Token =async(
    web3reactContext:any,
    args: Array<any>,
    fname:string,
    push:boolean
    )=>{
        const name  = String(fname);

    //setLoading(true)
    const notification = toast.loading("Listing...");
     //coming from hook
    const myContract = await getmainContract(web3reactContext.library, web3reactContext.account);
    const gasprice =await myContract.estimateGas?.[name](...args);
    try{
    const response = await myContract?.[name](
        ...args,
      {
        gasLimit:increaseGasLimit(gasprice?.toNumber()),
  
      }
    );
  
    const receipt = await response.wait();
    await toast.success(`Transation submited`,{
      id:notification
    });

    //transation done


    //router.push("/")
  }catch(error){
  console.log(error);
  await toast.error("Somthing went wrong..",{
    id:notification
  })
//failed

  }

  }




export const DirectCall =async(
  web3reactContext:any,
  args: Array<any>,
  fname:string,
  push:boolean,
  value:any
  )=>{
      
      const name  = String(fname);
console.log(...args);

  //setLoading(true)
  const notification = toast.loading("Listing...");
   //coming from hook
  const myContract = await getmainContract(web3reactContext.library, web3reactContext.account);
console.log(value);

  const gasprice =await myContract.estimateGas?.[name](...args,{value: (parseUnits(value))});
  console.log(gasprice);
  
  try{
    const response = await myContract?.[name](
        ...args,
      {
        gasLimit:increaseGasLimit(gasprice?.toNumber()),
        value:parseUnits(value)
  
      }
    );
  
    const receipt = await response.wait();
    await toast.success(`Transation submited`,{
      id:notification
    });
    //transation done


    //router.push("/")
  }catch(error){
  console.log(error);
  await toast.error("Somthing went wrong..",{
    id:notification
  })
//failed

  }




}






export const NFT_CONTRACT =async(
  web3reactContext:any,
  fname:string,
  push:boolean,
  value:any
  )=>{
      
      const name  = String(fname);

  //setLoading(true)
  const notification = toast.loading("Listing...");
   //coming from hook
  const myContract = await GetWeth(web3reactContext.library, web3reactContext.account);


  const gasprice =await myContract.estimateGas?.[name]({value: (parseUnits(value))});
  console.log(gasprice);
  
  try{
    const response = await myContract?.[name]({
        gasLimit:increaseGasLimit(gasprice?.toNumber()),
        value:parseUnits(value)
  
      }
    );
  
    const receipt = await response.wait();
    await toast.success(`Transation submited`,{
      id:notification
    });
    //transation done


    //router.push("/")
  }catch(error){
  console.log(error);
  await toast.error("Somthing went wrong..",{
    id:notification
  })
//failed

  }




}

export const NFT_CONTRACT_APPROVE =async(
  web3reactContext:any,
  Erc721:any,
  fname:string,
  args: Array<any>
  )=>{
      
      const name  = String(fname);

  //setLoading(true)
  const notification = toast.loading("Listing...");
   //coming from hook
  const myContract = await GetErc721Contract(web3reactContext.library, web3reactContext.account,Erc721);

  const gasprice =await myContract.estimateGas?.[name](...args);
  console.log(gasprice);
  
  try{
    const response = await myContract?.[name](
      ...args,{
        gasLimit:increaseGasLimit(gasprice?.toNumber()),
  
      }
    );
  
    const receipt = await response.wait();
    await toast.success(`Transation submited`,{
      id:notification
    });
    //transation done


    //router.push("/")
  }catch(error){
  console.log(error);
  await toast.error("Somthing went wrong..",{
    id:notification
  })
//failed

  }




}




export const  WETH_CONTRACT=async(
  web3reactContext:any,
  args: Array<any>,
  fname:string
  )=>{
      
      const name  = String(fname);

  //setLoading(true)
  const notification = toast.loading("Listing...");
   //coming from hook
  const myContract = await GetWeth(web3reactContext.library, web3reactContext.account);
  const gasprice =await myContract.estimateGas?.[name](...args);
  try{
  const response = await myContract?.[name](
      ...args,
    {
      gasLimit:increaseGasLimit(gasprice?.toNumber()),

    }
  );

  const receipt = await response.wait();
  await toast.success(`Transation submited`,{
    id:notification
  });
  //transation done


  //router.push("/")
}catch(error){
console.log(error);
await toast.error("Somthing went wrong..",{
  id:notification
})
//failed

}

}
