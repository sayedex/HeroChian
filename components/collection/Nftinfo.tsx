import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";
import { MARKET_CONTRACT } from "../../Config/contract";
import { useWeb3React } from "@web3-react/core";
import Bid from "../Bid/Bid";
import useBalances, { Listed_Token } from "../../hook/UserBalance";
import { formatEther } from "@ethersproject/units";
import { DirectCall as useWrite } from "../../hook/UserBalance";
import { TypeNFT } from "../NftCard";
import { QNFT, metadata } from "../../typings";
interface Props {
  metadataJson: metadata;
  nft: QNFT[];
}

const Nftinfo: React.FC<any> = ({ nft, metadataJson }: Props) => {
  const web3reactContext = useWeb3React();
  const router = useRouter();
  const { nft: NFT } = router.query;
  const { account, active, library } = useWeb3React();
  const {
    tokenId,
    id,
    metadataUrl,
    currentAskPrice: cPrice,
    currentSeller,
    askHistory,
    bidder,
    collection,
  } = nft[0];
  //the value will help us to understand its auction or fixed price..
  const type = NFT && NFT[2];
  const balances = useBalances(library, account);
  //  timestapcountdown
  const [timerDays, setTimerDays] = useState(Number);
  const [timerHours, setTimerHours] = useState(Number);
  const [timerMinutes, setTimerMinutes] = useState(Number);
  const [timerSeconds, setTimerSeconds] = useState(Number);
  const [auction_complated, setauction_complated] = useState(false);
  ///end

  //state of Bid..
  const [BidShow, setBidShow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [userBalance, setuserBalance] = useState(0);

  const { timestamp } = askHistory[0];
  const { name, description } = metadataJson;

  console.log("bidder", bidder);

  const { id: CollectionAddress } = collection;
  let interval: any;
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = timestamp * 1000 - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    const now = new Date().getTime();
    if (now < timestamp * 1000) {
      setauction_complated(false);
    } else {
      setauction_complated(true);
    }
    // dateInPast(now, today);

    console.log(now < timestamp * 1000);
  }, [nft]);

  ///

  //Listed token
  const BuyNFT = async () => {
    if (!cPrice && !nft && !account) {
      return;
    }

    if (currentSeller.toLowerCase() !== account?.toLowerCase()) {
      await useWrite(
        web3reactContext,
        [CollectionAddress, tokenId],
        "buyToken",
        true,
        cPrice
      );
    }
  };

  //Relist nft
  const ReList = async () => {};

  //bid...

  const EnableBid = () => {
    if (!active) {
      toast.error("Connect your wallet");
      // connectedweb3()
    } else {
      if (
        balances &&
        currentSeller.toLowerCase() != account?.toLowerCase() &&
        balances > cPrice
      ) {
        setBidShow(true);
      }
    }
  };

  return (
    <>
      {/* info div */}
      {BidShow && <Bid bidder={bidder} Bidhide={() => setBidShow(false)} />}
      <div className="bg-white  rounded-lg pt-4 pb-7 flex-1 w-full	 border mt-5">
        {nft && auction_complated && (
          <div
            className="bg-slate-100	 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-900  mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">EndTime Already Ended!</p>
                <p className="text-sm">Wait for Future Listing.</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center pt-3 pl-5 pr-5 ">
          <BiChevronLeft className="text-xl	" />
          <Link
            href={`/Collections/${CollectionAddress && CollectionAddress}`}
            className="text-lg	"
          >
            <a className=" text-sm font-semibold  overflow-hidden max-w-[200px]	">Back {name && name}</a>
          </Link>
        </div>

        {/* tittle */}
        <div className="pl-5 pr-5 pb-3">
 
          <h2 className="text-3xl font-extrabold pt-3	break-words max-w-[300px]">       {name && name}</h2>
          <p className="font-medium	pt-3 break-words max-w-[300px] ">Token id {tokenId && tokenId}</p>
        </div>

        {/* tittle */}

        {/* sales end  */}

        <div className="pt-3 pl-5 pb-3  pr-5 border	">
          <h2 className="text-xl	font-bold	">Sales ends in</h2>
          <div className="flex gap-x-6">
            <div>
              <h2 className="text-xl font-medium	">{timerDays}</h2>
              <p className="text-base	">Days</p>
            </div>
            <div>
              <h2 className="text-xl font-medium	">{timerHours}</h2>
              <p className="text-base	">Hours</p>
            </div>
            <div>
              <h2 className="text-xl font-medium	">{timerMinutes}</h2>
              <p className="text-base	">Minutes</p>
            </div>
            <div>
              <h2 className="text-xl font-medium	">{timerSeconds}</h2>
              <p className="text-base	">Second</p>
            </div>
          </div>
        </div>

        {/* sales end  */}

        {/* `current price` */}
        {/* {address && address.slice(1,5)+"..."+ address.slice(-3)} */}
        <div className="pt-3 pl-5 pr-5 ">
          <h2 className="text-lg	">Current price</h2>
          <h1 className="text-3xl font-bold	pt-2	">
            {cPrice && cPrice} <span>ETH</span>
          </h1>
          <p className="pt-3">
            Owned by{" "}
            {currentSeller &&
              currentSeller.slice(1, 5) + "..." + currentSeller.slice(-3)}
          </p>
        </div>

        {/* the component will print if auction already build  */}
        <div className="p-5">
          <button
            onClick={() => ReList()}
            className="hidden mt-3 w-full font-sans text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg tracking-[1px] p-3"
          >
            <span className="text-lg">Update Listing</span>
          </button>
        </div>
        {/* the component will print if auction already build  */}

        {/* currentAskPrice */}
        {/* `current price` */}
        {active && nft && balances && balances < cPrice ? (
          <div className="pl-5 text-red-500">
            {" "}
            insufficient balance {balances
              ? formatEther(balances)
              : null} ETH{" "}
          </div>
        ) : null}
        {/* buy button */}
        {!auction_complated && (
          <div className="flex flex-col	gap-y-3 p-5 ">
            {/* {!web3 && <button></button>} */}
            {type == TypeNFT.newList && (
              <button
                disabled={Loading}
                onClick={() => BuyNFT()}
                className="bg-black	text-white p-3 rounded-lg"
              >
                <span className="text-lg ">Buy now</span>
              </button>
            )}
            {type == TypeNFT.auctionList && (
              <button
                onClick={() => EnableBid()}
                className="	text-black p-3 rounded-lg border border-black		"
              >
                <span className="text-lg ">Place a Bid</span>
              </button>
            )}
          </div>
        )}

        {/* buy button */}
      </div>

      {/* info div */}
    </>
  );
};

export default Nftinfo;
