
import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Image from 'next/image';
import metamask from "../public/Wallet/metamask.png"
import walletconnect from "../public/Wallet/walletconnect.png"
import coinbase from "../public/Wallet/coinbase.png"
//connectors
import { injected, walletconnect as walletconnectt, resetWalletConnector, walletlink } from '../Helpers/connectors';
//func helper
import {connectMetamaskSimple} from "../Helpers/helper"
//redux
import { useAppSelector, useAppdispatch } from '../hook/redux';
import {setOpenmodel,setOffmodel} from "../Store/walletSlice"
import { useWeb3React } from "@web3-react/core";
const walletData =[
{
    name:"Metamask",
    icon:metamask.src,
    provider:injected

},
{
    name:"Walletconnect",
    icon:walletconnect.src,
    provider:walletconnectt
}
,
{
    name:"Coinbase",
    icon:coinbase.src,
    provider:walletlink
}

]


const Wallet = ()=> {
    const {account,
        activate,
        active,
        chainId,
        connector,
        deactivate,
        error,
        setError,} = useWeb3React(); 
    const wallet_model = useAppSelector((state:any) => state.wallet);
    const dispatch = useAppdispatch()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex:10,
          backgroundColor:'#1b1c1d',
          borderRadius:"10px"
        },
      };
      
  
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
       
      }
   
  
    function closeModal() {
        dispatch(setOffmodel())
    }
   //Connect_wallet
  const Connect_wallet = async(connector:any,provider:any)=>{
    console.log("asas");
    

    try{
    connectMetamaskSimple(connector,provider);
    dispatch(setOffmodel())
}catch{

    }


  }


//for 

React.useEffect(() => {
  
    //need to ck local store
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !active && !error) {
          activate(injected)
        }
      })
      .catch(() => {
  
      })
  }, [])
  
  
  return (
 <>
  <div className='z-10 relative'>
      <Modal
        isOpen={wallet_model.walletmodel}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="wallet model"
      >
     
       
<div className='max-w-md bg-[#10121f00] 	'>
<h2 className='text-2xl font-semibold p-10 text-center font-sans	antialiased text-white	'>Connect a wallet on Eth to continue</h2>

<div className="flex flex-col">
{walletData && walletData.map((el,index)=>{

    return (
    <div key={index} id="Wallet_btn" className='cursor-pointer flex flex-row gap-x-5 items-center p-3 bg-slate-700 hover:bg-white' onClick={()=>Connect_wallet(activate,el.provider)}>
   <div >
    
    <img width={28} height={28} src={el.icon} />
    
    </div> 
<span className='font-sans	text-white capitalize	 antialiased 	'>{el.name}</span>


    
    </div>)
})}
</div>



</div>




      </Modal>
    </div>
 </>
  )
}


export default Wallet

