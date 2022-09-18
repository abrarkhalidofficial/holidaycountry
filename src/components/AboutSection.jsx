import React from "react";
import About__us__logo from "../assets/About__us__logo.png";
import abou__us from "../assets/abou__us.png";
import about__us__ryt from "../assets/about__us__ryt.png";

export function AboutSection() {
  return (
    <section
      className="about__us"
      id="About"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div className="about__us__all">
        <div
          className="about__us__left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="900"
        >
          <div
            className="about__us__left__logo"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={About__us__logo} alt="About__us__logo" />
          </div>
          <div
            className="about__us__left__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1100"
          >
            About Us
          </div>
          <div
            className="about__us__left__Info"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="about__us__mid">
          <img src={abou__us} alt="abou__us" />
        </div>
        <div className="about__us__right">
          <img src={about__us__ryt} alt="about__us__ryt" />
        </div>
      </div>
    </section>
  );
}
