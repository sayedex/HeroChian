import React,{useState} from 'react'
import { Dispatch, SetStateAction } from "react";
import { useAppSelector, useAppdispatch } from '../hook/redux'
import {add_ALL,filter,Search} from "../Store/Newlist"
import { BiSearch } from "react-icons/bi";

import { BiCaretDown } from "react-icons/bi";
 
const Option = [
    {
        option:"lowprice"
    },
    {
        option:"highprice"
    },
    {
    option:"tokenID"
    },
 

]



 const Filter = () => {
     const dispatch = useAppdispatch()
     const [option,setoption] = useState("")
     const [search,setsearch] = useState(null);  


//end
//onchange for option
const CallOption = (e:any)=>{
    setoption(e.target.value);

}


const filter_item= (e:any)=>{
dispatch(filter(e.target.value))
  
}


const Filter_via_search = (e:any)=>{
    dispatch(Search(e.target.value))

}
//filter serch


  return (
    <div className='flex justify-center items-center  sm:justify-between bg-white border p-3 pr-1  pl-1 sm:pr-3 sm:pl-3 sm:w-11/12 md:w-full	 m-auto	rounded-lg gap-x-2' >

<form>   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={(e)=>Filter_via_search(e)} type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="TokenId" required/>
    </div>
</form>

      {/* serch bar */}  


{/* sort */}


<div className="flex justify-center items-center">
  <div className="">
    <select  onClick={(e)=>filter_item(e)} value={option} onChange={(e)=>CallOption(e)} className="border-2  text-gray-500 rounded-lg border-gray-200 dark:border-secondary-dark dark:bg-secondary-dark cursor-pointer outline-none p-2 m-2" aria-label="ALL">
 <option selected>Sort by</option>
   {Option && Option.map((e:any,index:any)=>{
 
return <option key={index} className='m-2' value={e.option}>{e.option}</option>

   })}


    </select>
  </div>
</div>




{/* sort */}

    </div>
  )
}


export default Filter;