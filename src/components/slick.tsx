import Image from "next/image";
import Slider, { Settings } from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import albumImgs from "@/db/albums.json";

export default function Slick() {
  let settings: Settings = {
    dots: false,
    infinite: true,
    speed: 400,
    swipe: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
    waitForAnimate: true,
    autoplaySpeed: 7500,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        {albumImgs.map((img, index) => (
          <div key={index}>
            <Image
              src={img.filePath}
              width={500}
              height={500}
              loading="lazy"
              style={{
                width: "fit-content",
                objectFit: "contain",
                position: "relative",
              }}
              alt={"T2U Slider Picture " + index}
            />
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
}
