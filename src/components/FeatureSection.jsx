import React from "react";
import overlaylogo from "../assets/overlay-logo.png";
import overlaycard1 from "../assets/overlaycard1.png";
import overlaycard2 from "../assets/overlaycard2.png";
import overlaycard3 from "../assets/overlaycard3.png";
import overlaycard4 from "../assets/overlaycard4.png";
import overlaycard5 from "../assets/overlaycard5.png";

export function FeatureSection() {
  return (
    <section className="Cards" id="Features">
      <div className="Overlay__Cards">
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard1} alt="" />
            </div>
          </div>
          <div className="overlay__heading">Swimming Pool</div>
        </div>
        <div className="Overlay__Card__logo">
          <img src={overlaylogo} alt="" />
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard2} alt="" />
            </div>
          </div>
          <div className="overlay__heading">Jamia Masjid</div>
        </div>
      </div>
      <div className="Overlay__Cards">
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard3} alt="" />
            </div>
          </div>
          <div className="overlay__heading">Grand Main Gate</div>
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard4} alt="" />
            </div>
          </div>
          <div className="overlay__heading">Mountain Top</div>
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard5} alt="" />
            </div>
          </div>
          <div className="overlay__heading">Lake Zipline</div>
        </div>
      </div>
    </section>
  );
}
