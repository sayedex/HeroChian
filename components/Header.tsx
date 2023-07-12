import PropTypes from 'prop-types'
import React, { memo ,useState,useEffect} from 'react'
import Image from 'next/image';
import  style  from "../components/CSS/Header.module.css"
import Site_logo from "../public/img/LOGO.png"
import { IoMdWallet } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import toast from "react-hot-toast"
import {Headerdata} from "../components/Config/Headerdata"
import { BiAlignRight } from "react-icons/bi";
import Mobilemanu from "../components/Mobilemanu"
import Link from 'next/link'
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import {setOpenmodel} from "../Store/walletSlice"
import { useWeb3React } from "@web3-react/core";
import {disconnect} from "../Helpers/helper"
interface Props { 
  children: React.ReactNode;
}



const Header: React.FC =() => {
const [width,setwidth] = useState(0)
const [show_mobile_manu,setshow_mobile_manu] = useState(false)
const {account,
  activate,
  active,
  chainId,
  connector,
  deactivate,
  error,
  setError} = useWeb3React(); 
//react redux
const dispatch = useDispatch();
const router = useRouter();
const products = useSelector((state:any) => state.wallet);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize =()=> {
        // Set window width/height to state
        setwidth(
          window.innerWidth,
      );
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  //state for Showing and hiding our dropdown manus..
  const [show_Dropdown,setshow_Dropdown] = useState(false);

//connect web3 



const Connectwithweb3 = ()=>{
  console.log("Sayed");
  dispatch(setOpenmodel())
  
}



//disconnected func calling disoconnect web3
const disconnected  = ()=>{
  disconnect(deactivate)
  setshow_Dropdown(false);
 
}


  return (
<>
<div className='items-center border-b bg-white item-center bg-opacity-[75%]  transform backdrop-blur-md text-white dark:text-white z-50 sticky top-[0px] w-full h-[100px] px-2 sm:px-6 md:px-10 '>
<div className="p-1 sm:pt-2 pb-1 max-w-7xl m-auto  flex flex-row items-center justify-between" id={style.mainheader} >

{/* logo part  */}

<div id={style.site_logo} className="md:flex-3 flex-5 p-3">
<Link href="/">
<Image src={Site_logo} 
 width={100}
 height={40}
 className="cursor-pointer"
/>
</Link>
</div>

{/* manu part  */}

<div className='md:flex-1 flex-1 '>

{width && width>768?<div className='flex gap-x-11 md:justify-end	md:pr-8'>

{Headerdata.map((e,index)=>{

return (
<div key={index} className={`hover:text-zinc-700 hover:bg-secondary-dark p-2 hover:bg-gray-100 font-semibold 	${router.pathname == e.path ? "border-b-2 text-black" : "text-black"}`}>
<Link className='flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 p-4 transition-all' href={e.path}>{e.name}</Link>

</div>

)

})}

</div>:null}


</div>


{/* manu part  */}


{/* account info part */}
<div id={style.Account_info} className="z-1 md:flex-0">

<div id={style.connect} className="mr-2 bg-white hover:bg-slate-200	border border-box rounded-full pl-2 pr-2 p-1 sm:pl-5 sm:pr-5 sm:pt-1 sm:pb-1 md:basis-1/4	">
  
{!active && (<button onClick={()=>Connectwithweb3()} className='text-black font-bold py-2 px-4 rounded-full'>Connect
</button>)}

{active && <div id={style.toggle} className="flex items-center gap-x-2 sm:gap-x-5">
{/* logo */}
<div id={style.Account_Ad} className="text-black	">
  <p className='text-xs'>{account && account.slice(1,5)+"..."+ account.slice(-3)}</p>
{/* <h2 className='font-medium	text-black hidden sm:block'>5230</h2> */}
</div>

<div id={style.dropdown}  className="z-10">
<div className='flex gap-x-2 items-center' onClick={()=>setshow_Dropdown(!show_Dropdown)}>
  <div className='bg-[#ffffff] p-1 rounded-full border-4 cursor-pointer '>
  <IoMdWallet className=' text-black text-lg sm:text-2xl ' />
  </div>
<IoIosArrowDown className='text-xl cursor-pointer text-black hover:text-slate-400		'/>

</div>

{/* drop down all */}


</div>


</div>}



{active && show_Dropdown && <div id={style.dropdown_manu} className="font-sans font-semibold text-slate-300	gap-y-5	z-10 relative">
  <ul className='flex flex-col	 gap-y-5 '>
    {/* <li className='hover:text-slate-400	 cursor-pointer'>Wallet</li> */}
    <li className='flex items-center gap-x-2 justify-between hover:text-slate-400	 cursor-pointer' onClick={()=>disconnected()}>Disconnect 
    <TbLogout className='text-2xl'/></li>
  </ul>
</div>
}
</div>


</div>


{/* humbergar manu.. */}

<div className='md:hidden'>
  <a href='#'>
<BiAlignRight className='text-black text-3xl	' onClick={()=>setshow_mobile_manu(true)}/>

  </a>
{ show_mobile_manu ==true?
  <div className="md:hidden">
   <Mobilemanu manu={show_mobile_manu} turnOff={()=>setshow_mobile_manu(false)}/>
   </div>:null
}


</div>



{/* humbergar manu.. */}

</div>
</div>


</>
  )
}

// export const getLayout = page => <Header>{page}</Header>;


export default Header