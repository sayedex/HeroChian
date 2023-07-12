import React from 'react'
import Wallet from "./Walletconnection"
import Header from '../components/Header'
import Ft from "../components/Fo/Ft"
const  Layout = (props:any)=> {

  
  return (
 <>
 
 <Header/>
<Wallet/>
 {props.children}
 <Ft/>
 </>
  )
}


export default Layout

