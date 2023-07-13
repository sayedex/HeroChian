import React, { useContext, useEffect, useState } from "react";
//AiFillCloseSquare
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { MARKET_CONTRACT } from "../../Config/contract";
import { formatEther, parseEther, parseUnits } from "@ethersproject/units";
import toast from "react-hot-toast";
import {
  NFT_CONTRACT,
  WETH_CONTRACT,
  Listed_Token,
} from "../../hook/UserBalance";

const step = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
];
const Bid = (e: any) => {
  const [selectedDate, setselectedDate] = useState(null);
  const router = useRouter();
  const { nft } = router.query;
  const erc721 = nft ? nft[0].toString() : "";
  const tokenid = nft ? nft[1].toString() : "";
  const [userValue, setuserValue] = useState("0");
  const [days, setDays] = useState(3);
  const [load, setload] = useState(false);
  //erc721 + token id need for this...
  //value also..
  const [index, setindex] = useState(0);
  // this will update GlobalState
  const web3reactContext = useWeb3React();

console.log(e);



  //ConvertWETH
  const ConvertWETH = async () => {
    if(e.bidder.length==0) {
      if (userValue) {
        await setload(true);
        await NFT_CONTRACT(web3reactContext, "deposit", false, userValue);
        await setload(false);
        await setindex(1);
      }else{
        toast("Type Value");
      }
    }else{

    
    if (e?.bidder.price >= userValue) {
      toast("put upper bid ");
    } else if (userValue) {
      await setload(true);
      await NFT_CONTRACT(web3reactContext, "deposit", false, userValue);
      await setload(false);
      await setindex(1);
    } else {
      toast("Type Value");
    }
  }
  };

  //ConvertWETH

  //approve ETH...
  const Approved = async () => {
    const value = parseUnits(userValue);
    if (value) {
      await setload(true);
      await WETH_CONTRACT(
        web3reactContext,
        [MARKET_CONTRACT, value],
        "approve"
      );
      await setload(false);
      await setindex(2);
    } else {
      toast("Type Value");
    }
  };
  //approve ETH...

  // web3reactContext:any,
  // args: Array<any>,
  // fname:string,
  // push:boolean

  // enterBidForToken(ERC710,tokenId,Value,expire)
  const PlaceBid = async () => {
    const value = parseUnits(userValue);
    const date = selectedDate && selectedDate / 1000;
    if (value && date) {
      await setload(true);
      await Listed_Token(
        web3reactContext,
        [erc721, tokenid, value, date],
        "enterBidForToken",
        false
      );
      await setload(false);
      await e.Bidhide();
    } else {
      toast("Type all info");
    }
  };

  return (
    <div id="place_Bid">
      <div className="w-4/5 p-5 absolute top-1/3 bg-white border rounded-lg m-auto left-2/4	trsanforma sm:w-96">
        <h1
          className="  mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6"
        >
          Place a bid
        </h1>
        <div className="absolute right-1 top-1 p-2	">
          <AiFillCloseSquare onClick={e.Bidhide} className="text-2xl" />
        </div>

        {/* /step */}

        <div className="flex justify-center gap-x-3  ">
          {step &&
            step.map((e, indx) => {
              return (
                <div
                  className={`${
                    index == indx ? "border-indigo-500 bg-gray-100" : ""
                  } border-b-2  tracking-wider  py-1   pl-2 pr-2 `}
                >
                  Step {e.id}
                </div>
              );
            })}
        </div>

        {/* /step */}

        <label className="block pt-3 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
          Expire Listing
        </label>
        <div className="pt-3 pb-2 flex gap-x-2 w-fit">
          <DatePicker
            className="p-2 w-72 rounded border-2 border-gray-200  "
            selected={selectedDate}
            onChange={(date: any) => setselectedDate(date.getTime())}
            showTimeSelect
            dateFormat="Pp"
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            placeholderText="Enter end time"
          />
        </div>
        <label className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
          Price
        </label>
        <input
          type="number"
          onChange={(e) => setuserValue(e.target.value)}
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-72 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"'
        ></input>

        {index == 0 && (
          <button
            disabled={load}
            onClick={() => ConvertWETH()}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Convert
          </button>
        )}

        {index == 1 && (
          <button
            disabled={load}
            onClick={() => Approved()}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Approve
          </button>
        )}
        {index == 2 && (
          <button
            disabled={load}
            onClick={() => PlaceBid()}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Bid now
          </button>
        )}
      </div>
    </div>
  );
};

export default Bid;
