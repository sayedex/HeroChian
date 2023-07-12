import React from 'react'
import {Hero} from "../Homecom/Hero"
import {Hotcollectionmain} from "./Hotcollectionmain";
import Newlistcomponent from './Newlist'
import RecentSell from "./RecentSell"
import Collectionslide from "./Collectionslide"
import Auction from "./Auction"
import StaticSection from "./StaticSection";
import Statictow from "./Statictow"
 const Homecomponent = () => {
  return (
    <div className='bg-{#e4ebef}	'>
      <Hero/>
    <Collectionslide/>
    <Hotcollectionmain/>
    <Newlistcomponent/>
    <Auction/>
    <RecentSell/> 
    <Statictow/>
    <StaticSection/>
    </div>
  )
}


export default Homecomponent;
