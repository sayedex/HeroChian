import type { NextPage } from 'next'
import toast, { Toaster } from 'react-hot-toast';
import React, { useState ,useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import history from '../components/routerHistory'
import Homecomponent from '../components/Homecom/Home';
//remove
// import Header from "../components/Header"
import Header from '../components/Header';
import Sidebar from "../components/Sidebar"



//remove 


const Home: NextPage = () => {
  
  return (<>
      <Router  history={history}>
        <Homecomponent/>

</Router>

     </>
  )
}

export default React.memo(Home);
