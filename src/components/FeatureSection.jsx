import overlaycard1 from "../assets/overlaycard1.png";
import overlaycard2 from "../assets/overlaycard2.png";
import overlaycard3 from "../assets/overlaycard3.png";
import overlaycard4 from "../assets/overlaycard4.png";
import overlaycard5 from "../assets/overlaycard5.png";
import overlaylogo from "../assets/overlay-logo.png";

export function FeatureSection() {
  return (
    <section className="Cards" id="Features">
      <div
        className="Overlay__Cards"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard1} alt="overlaycard" />
            </div>
          </div>
          <div className="overlay__heading">Swimming Pool</div>
        </div>
        <div
          className="Overlay__Card__logo"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <img src={overlaylogo} alt="overlaylogo" />
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard2} alt="overlaycard" />
            </div>
          </div>
          <div className="overlay__heading">Jamia Masjid</div>
        </div>
      </div>
      <div
        className="Overlay__Cards"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard3} alt="overlaycard" />
            </div>
          </div>
          <div className="overlay__heading">Grand Main Gate</div>
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard4} alt="overlaycard" />
            </div>
          </div>
          <div className="overlay__heading">Mountain Top</div>
        </div>
        <div className="Overlay__Card__con">
          <div className="overlay__img">
            <div className="Overlay__Card__img">
              <img src={overlaycard5} alt="overlaycard" />
            </div>
          </div>
          <div className="overlay__heading">Lake Zipline</div>
        </div>
      </div>
    </section>
  );
}
