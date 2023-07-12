import { Contract } from '@ethersproject/contracts';
import ABI from "../Constants/abi/market.json"
import erc from "../Constants/abi/erc721.json"
import Weth from "../Constants/abi/Weth.json";
import {MARKET_CONTRACT,WETH} from "../Config/contract"
//export const contractAddress = '0x7D498f39E324c99cb36572A35Ee472bbD84e5B04';



//hook for Read/write all kind of function for main core contract 
export const getmainContract = (library:any, account:any) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(MARKET_CONTRACT, ABI.abi, signer);
	return contract;
};

//return Erc721 contract ///


//hook for Returning all Erc721 contract 
export async function GetErc721Contract(
   library:any,
   account:any,
   ERC710:any,
 ){
   const signer = library.getSigner(account).connectUnchecked();
	var contract = new Contract(ERC710, erc.abi, signer);
	return contract;

 }

///for WETH
//hook for Returning all Erc721 contract 
export async function GetWeth(
   library:any,
   account:any,
 ){
   const signer = library.getSigner(account).connectUnchecked();
	var contract = new Contract(WETH, Weth.abi, signer);
	return contract;

 }






export async function evaluateTransaction(
    contract: any,
    methodName: string,
    args: Array<any>
 ): Promise<any> {
  try {
    const methods = await contract?.callStatic
    const bcValues = await methods?.[methodName](...args)
    return bcValues
  } catch (e) {
     console.log(e)
     return e
  }
 }


 export const submitTransaction = async (
    methodsName: string,
    args: Array<any>,
    contract: Contract | null,
    account: string | null, 
    library: any // the signature provider) => {
 )=>{
    try {
    const callData =   contract?.interface.encodeFunctionData(methodsName, args)
     return library?.getSigner().sendTransaction({
        from: account ? account : undefined,
        to: contract?.address,
        data: callData
     })
    } catch (e) {
      console.log(e)
      return e
    }
}



export const increaseGasLimit = (estimatedGasLimit: any) => {
   return Math.floor(estimatedGasLimit*(110)/(100)) // increase by 30%
 }
 