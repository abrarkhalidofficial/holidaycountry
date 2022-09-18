import React, { useEffect, useState } from "react";
import offerback from "../assets/offerback.png";
import sliderimg1 from "../assets/slider1.png";
import sliderimg2 from "../assets/slider2.png";
import sliderimg3 from "../assets/slider3.png";
import sliderimg4 from "../assets/slider4.png";
import sliderimg5 from "../assets/slider5.png";
import sliderimg6 from "../assets/slider6.png";
import { Swiper, SwiperSlide } from "swiper/react";

export function OfferSection() {
  const [slidesPerView, setSlidesPerView] = useState(6);
  function changeSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 600) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 800) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(6);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  const sliderEntries = [
    {
      name: "Horse Stable",
      img: sliderimg1,
    },
    {
      name: "Horse Stable",
      img: sliderimg2,
    },
    {
      name: "Horse Riding",
      img: sliderimg3,
    },
    {
      name: "Polo Club",
      img: sliderimg4,
    },
    {
      name: "Golf Club",
      img: sliderimg5,
    },
    {
      name: "Bicycle Track",
      img: sliderimg6,
    },
    {
      name: "Horse Stable",
      img: sliderimg1,
    },
    {
      name: "Horse Stable",
      img: sliderimg2,
    },
    {
      name: "Horse Riding",
      img: sliderimg3,
    },
    {
      name: "Polo Club",
      img: sliderimg4,
    },
    {
      name: "Golf Club",
      img: sliderimg5,
    },
    {
      name: "Bicycle Track",
      img: sliderimg6,
    },
  ];

  return (
    <section className="offer__Section">
      <div className="offer__heading">Facilities We Offer</div>
      <div className="offer__heading__img">
        <img src={offerback} alt="" />
      </div>
      <div className="slider">
        <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
          {sliderEntries.map((item, index) => {
            return (
              <SwiperSlide className="swiper__slider" key={index}>
                <div className="swiper__card__con">
                  <div className="slider__img">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="offer__overlay"></div>
                <div className="slider__img__heading">{item.name}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
