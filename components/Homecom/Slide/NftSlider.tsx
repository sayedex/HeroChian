import React, { useEffect, useState, CSSProperties } from "react";
import { TopNFT } from "../../../graphql/Queries";
import { NftslideComponent } from "../Hero/NftslideComponent";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGQLQuery } from "../../../hook/useGQLQuery";
import { TypeNFT } from "../../NftCard";
export const NftSlider = (which: any) => {
  const { data: nedata, error } = useGQLQuery(TopNFT, {
    first: 6,
  });

  const Data = nedata ? nedata.nfts : null;

  return (
    <div className="w-full md:w-96	">
      {/* <NFtSlide nft={NFT} which={"Slide"}/> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data &&
          Data.map((e: any, index: any) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <NftslideComponent nft={e} />
                </SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
};
