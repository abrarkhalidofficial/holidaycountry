import React, { useEffect } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import banner from "../assets/banner.png";
import Bannerlogo from "../assets/Bannerlogo.png";
import contect__header__logo from "../assets/contect__header__logo.png";

export function HomeSection() {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShow(false);
      }
    });
  }, []);
  return (
    <section className="container" id="Home">
      <div className="navbar">
        <div className="banner__img">
          <img className="baner_img" src={banner} alt="banner" />
        </div>
        <div className="con__banner">
          <div className="navbar__logo">
            <div className="navbar__logo__content">
              <div className="navbar__logo__img">
                <a href="https://holiday-country.web.app/">
                  <img src={Bannerlogo} alt="Bannerlogo" />
                </a>
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
                  <a className="navbar_contant" href="#Features">
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
            <div
              className="side_nav"
              id="side_nav"
              style={
                show
                  ? {
                      display: "flex",
                    }
                  : {
                      display: "none",
                    }
              }
            >
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
            <div
              className="menu_btn"
              id="menu_btn"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img className="menu" src={show ? close : menu} id="menu" />
            </div>
          </div>
          <div className="contect__header">
            <div className="contect__header__logo">
              <img src={contect__header__logo} alt="contect__header__logo" />
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
