import WishProps from "@/interfaces/WishProps";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SlickWish(props: { wishes: WishProps[] }) {
  const { wishes } = props;
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        {wishes.map((wish, i) => (
          <div key={i}>
            <p>
              <span className="wish-header">{wish.name} : </span>
              <span className="wish-content">{wish.content}</span>
            </p>
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
}
