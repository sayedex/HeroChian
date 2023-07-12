import React from 'react'
import style from "../components/CSS/Sidebar.module.css"
import { AiOutlineHome } from "react-icons/ai";
import {Headerdata} from "./Config/Headerdata"
import Link from 'next/link'
import { useRouter } from 'next/router'


interface Headerdata {
    name: string;
    path: string;
  }
const Sidebar =()=> {
    const router = useRouter()


  return (
    <div id={style.sidebar}>
      

<div>
<ul  className='flex flex-col mt-10 '>

    {Headerdata.map((e)=>{
return (<li className='text-white flex items-center gap-x-2 p-4 pl-10 pr-10'>
    {e.icon}
<Link  id={router.pathname == "/" ? "active" : ""} href={e.path}>{e.name}</Link>


</li>)


    })}

</ul>

</div>






    </div>
  )
}



export default Sidebar

