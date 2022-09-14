import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";

import offerback from "../image/offerback.png";
import sliderimg1 from "../image/slider1.png";
import sliderimg2 from "../image/slider2.png";
import sliderimg3 from "../image/slider3.png";
import sliderimg4 from "../image/slider4.png";
import sliderimg5 from "../image/slider5.png";
import sliderimg6 from "../image/slider6.png";

import { Swiper, SwiperSlide } from "swiper/react";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function HomeSection() {
  return (
    <section className="container" id="Home">
      <div className="navbar">
        <div className="banner__img">
          <img className="baner_img" src="./image/banner.png" alt="" />
        </div>
        <div className="con__banner">
          <div className="navbar__logo">
            <div className="navbar__logo__content">
              <div className="navbar__logo__img">
                <img src="./image/Bannerlogo.png" alt="" />
              </div>
            </div>

            <nav className="navbar__main">
              <ul>
                <li>
                  <a className="navbar_contant" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="navbar_contant" href="#About">
                    About us
                  </a>
                </li>
                <li>
                  <a className="navbar_contant" href="#Amenities">
                    Features
                  </a>
                </li>

                <li>
                  <a className="navbar_contant" href="#Contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="side_nav" id="side_nav">
              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#About">About us</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#Amenities">Features</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#Contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="menu_btn" id="menu_btn" onclick="menuControl()">
              <img className="menu" src="./image/menu.png" id="menu" />
            </div>
          </div>
          <div className="contect__header">
            <div className="contect__header__logo">
              <img src="./image/contect__header__logo.png" alt="Headerlogo" />
            </div>
            <div className="contect__header__line">
              Welcome to Holiday Country Club
            </div>
            <div className="contect__header__hr__line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutSection() {
  return (
    <section className="about__us">
      <div className="about__us__all">
        <div className="about__us__left">
          <div className="about__us__left__logo">
            <img src="./image/About__us__logo.png" alt="" />
          </div>
          <div className="about__us__left__heading">About Us</div>
          <div className="about__us__left__Info">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="about__us__mid">
          <img src="./image/abou__us.png" alt="" />
        </div>
        <div className="about__us__right">
          <img src="./image/about__us__ryt.png" alt="" />
        </div>
      </div>
    </section>
  );
}
function App() {
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
    <div>
      <HomeSection />
      <AboutSection />
      <section className="offer__Section">
        <div class="offer__heading">Facilities We Offer</div>
        <div className="offer__heading__img">
          <img src={offerback} alt="" />
        </div>
        <div className="slider">
          <Swiper spaceBetween={15} slidesPerView={6}>
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
    </div>
  );
}

<section className=""></section>;
