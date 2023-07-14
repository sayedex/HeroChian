import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { ButtonLoad } from "../../components/LazyLoad/Box";
import IMG from "../../components/NFTprofile/IMG";
import { useRouter } from "next/router";
import { formatEther, parseEther, parseUnits } from "@ethersproject/units";
//web3-react
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { MARKET_CONTRACT } from "../../Config/contract";
//redux
import { useAppSelector, useAppdispatch } from "../../hook/redux";
import { setOpenmodel, setOffmodel } from "../../Store/walletSlice";
//transation sending hook
import { GetErc721Contract } from "../../hook/contractcall";
import { increaseGasLimit } from "../../hook/contractcall";
import {
  Listed_Token as useWrite,
  NFT_CONTRACT_APPROVE,
} from "../../hook/UserBalance";

const List = () => {
  //data from React/router
  const router = useRouter();
  const { List } = router.query;
  const { account, active, library } = useWeb3React();
  const ERC721 = List && List[0];
  const TokenId = List && List[1].toString();

  //data from React/router

  //all input state
  const [selectedDate, setselectedDate] = useState(null);
  const [Pirce, setPrice] = useState("");
  //all input state

  //loading state
  const [loading, setLoading] = useState(false);
  const [loaded, setloaded] = useState(false);
  //the nft approved or not
  const [approve, setapprove] = useState(false);
  //auction/buynow
  const [isauction, setisauction] = useState(0);

  //redux state
  const cardNFT = useAppSelector((state) => state.wallet.cardNFT);
  //web3 hook
  const web3reactContext = useWeb3React();

  const Testgas = async () => {
    const endtime = selectedDate && selectedDate / 1000;
    setLoading(true);

    await useWrite(
      web3reactContext,
      [ERC721, TokenId, Pirce, endtime, isauction, 1],
      "listToken",
      true
    );
    setLoading(false);
  };

  //Listed token
  const Listed_Token = async () => {
    const endtime = selectedDate && selectedDate / 1000;
    const price = parseUnits(Pirce);
    setLoading(true);
    await useWrite(
      web3reactContext,
      [ERC721, TokenId, price, endtime, isauction, 1],
      "listToken",
      true
    );
    setLoading(false);
    router.push("/Newlist");
  };

  //For Returing the NFT already approved or not
  const Call_NFT_approved = async () => {
    setloaded(true);
    //GetErc721Contract( library:any,account:any,ERC710:any)
    const myContract = await GetErc721Contract(
      web3reactContext.library,
      web3reactContext.account,
      ERC721
    );
    console.log("erc721", myContract);

    try {
      const response = await myContract.isApprovedForAll(
        account,
        MARKET_CONTRACT
      );
      setapprove(response);
      console.log(response);
    } catch (er) {
      console.log(er);
    }
    setloaded(false);
  };

  //approve all nft for market
  const SetAPPROVED_ALL = async () => {
    setLoading(true);
    await NFT_CONTRACT_APPROVE(web3reactContext, ERC721, "setApprovalForAll", [
      MARKET_CONTRACT,
      1,
    ]);
    setapprove(true);
    setLoading(false);
  };

  useEffect(() => {
    let run = false;
    if (!run) {
      Call_NFT_approved();
    }
    return () => {
      run = true;
    };
  }, [ERC721, TokenId, account, approve]);

  return (
    <div className="h-auto pb-10 flex flex-wrap m-auto justify-center items-center sm:h-screen">
      <div className=" p-10 max-w-md	">
        <div>
          <h1 className="text-2xl font-bold pb-4">List item for sale</h1>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Type
          </label>
          <div className="flex gap-x-2 w-72">
            <div className="flex-1">
              <button
                onClick={() => setisauction(0)}
                className={`mt-2 w-full border-2  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isauction == 0 ? "bg-blue-500 text-white" : "text-black"
                } `}
              >
                Fixed Price
              </button>
            </div>
            <div className="flex-1">
              <button
                onClick={() => setisauction(1)}
                className={`mt-2 w-full border-2   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isauction == 1 ? "bg-blue-500 text-white" : "text-black"
                }`}
              >
                Auction
              </button>
            </div>
          </div>
          <div className="w-72 pt-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              className='rounded-xl bg-white appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"'
            ></input>
          </div>

          <div className="w-fit mt-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Duration
            </label>
            <DatePicker
              className="p-2 w-72 rounded-xl border-2 border-gray-200  "
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
          <div className="mt-2">
            {loaded && <ButtonLoad />}
            {!loaded && !approve && (
              <button
                disabled={loading}
                onClick={() => SetAPPROVED_ALL()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Approve{" "}
              </button>
            )}
            {!loaded && approve && (
              <button
                disabled={loading}
                onClick={() => Listed_Token()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Complete Listing
              </button>
            )}
          </div>
        </div>
      </div>
      <IMG Data={cardNFT} price={Pirce} />
    </div>
  );
};

export default List;
