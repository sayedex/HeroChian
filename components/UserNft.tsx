import { useEffect, useContext, memo } from "react";
import useState from "react-usestateref";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ConvertLink } from "../hook/Useipfslink";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector, useAppdispatch } from "../hook/redux";
import { FetchuserNFT, addCard } from "../Store/walletSlice";
import Layyerimg from "../public/img/layer.png";
// MARKET_CONTRACT = "0xB8662d4CC1Df083a83aE1aefa8268482696aac62
import "react-lazy-load-image-component/src/effects/blur.css";
//https://tdbc.mypinata.cloud/ipfs/QmT3nzzr5sfWyaRzoXqDRSGLYutHhL7YDMXWJRfqwoZAcX
import { MARKET_CONTRACT } from "../Config/contract";
import Link from "next/link";
import { nftdata } from "../typings";
type Props = {
  Data: nftdata;
};

const Nftcom = ({
  Data: { amount, metadata, token_address, token_id, token_uri, name },
}: Props) => {
  const dispatch = useAppdispatch();
  const router = useRouter();
  const { account, active } = useWeb3React();
  const attributes = metadata && JSON.parse(metadata);
  const image_Src = attributes && attributes?.image;

  // console.log(Filter);
  //important useEffect for geting metadata..

  const tok = "1000000000000000000000000000000000000000000000000";

  const addTocard = () => {
    dispatch(addCard(attributes));
  };

  // console.log(e?.Data.token_uri);

  return (
    <>
      {
        <div className="m-auto max-w-[280px] p-3 h-auto flex justify-center flex-col bg-white rounded-lg object-contain	w-fit shadow-md bg-blend-multiply border min-h-full	">
          {/* img */}
          <div className="md:w-64 w-fit	">
            <LazyLoadImage
              width={254}
              height={254}
              placeholderSrc={Layyerimg.src}
              className="w-fit rounded-lg"
              src={ConvertLink(image_Src)}
            />
          </div>

          {/* img */}
          {/* name  */}
          <div className="pb-1 pt-3 border-b border-gray-800 relative	 ">
      
            <div className="w-full">
              <div className="text-neutral-800 font-medium font-sans text-xs overflow-hidden break-words">
                #{token_id}
              </div>
            </div>
            <h1 className="text-neutral-800		font-bold font-sans	text-lg  break-words	">
              {name} #{token_id}
            </h1>
          </div>
          {/* name  */}

          <div className="pt-3"></div>
          <div>
            <Link href={`${token_address}/${token_id}`}>
              <button
                onClick={() => addTocard()}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sale
              </button>
            </Link>
          </div>
        </div>
      }
    </>
  );
};

export default memo(Nftcom);
