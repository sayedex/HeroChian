import React, { useEffect, useState } from "react";
import Nft from "../../components/NftCard";
import Filter from "../../components/Filter";
import { useAppSelector, useAppdispatch } from "../../hook/redux";
import { TypeNFT } from "../../components/NftCard";
const Listing = () => {
  // console.log(filter);
  const { filter } = useAppSelector((state) => state.buyordernft);

  return (
    <div className="mt-5 max-w-7xl m-auto ">
      {/* serch and filter */}
      <Filter />
      <div className="flex justify-center flex-wrap">
        {filter &&
          filter.map((e: any, index: any) => {
            return (
              <>
                <Nft key={index} nft={e} which={TypeNFT.newList} />
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Listing;
