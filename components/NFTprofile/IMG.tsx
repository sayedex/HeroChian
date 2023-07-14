import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ConvertLink } from "../../hook/Useipfslink";
type Data = {
  image: any;
  tokenId: any;
  name: any;
  price: any;
};
const IMG = (props: any) => {
  console.log();

  console.log(props.Data && props.Data.name);
  
  return (
    <div className="p-3  flex justify-center flex-col bg-white rounded-lg object-contain	min-w-fit shadow-md bg-blend-multiply border h-fit ">
      {/* img */}
      <div className="md:w-64 w-fit	">
        <LazyLoadImage
          width={254}
          height={254}
          effect="blur"
          className="w-fit rounded-lg"
          src={props && ConvertLink(props.Data?.image || "")}
        />
      </div>

      {/* img */}
      {/* name  */}
      <div className="pb-1 pt-3 border-b border-gray-800		 ">
        {/* <p className='text-neutral-800	 font-medium font-sans	text-xs	'>#{props && props.tokenId}</p> */}
        <h1 className="text-neutral-800		font-bold font-sans	text-lg  break-words	max-w-[200px]">
        {props.Data && props.Data.name}
        </h1>
        <h1>Pirce : {props.price} ETH</h1>
      </div>
      {/* name  */}
    </div>
  );
};

export default IMG;
