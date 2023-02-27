import placeleftlogo from "../assets/Place-Logo.png";
import placemidimg from "../assets/Place-left.png";
import placerightimg from "../assets/place-right.png";

export function PlaceSection() {
  return (
    <section
      className="place"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <div className="place__left">
        <div
          className="place__left__logo"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1500"
        >
          <img src={placeleftlogo} alt="placeleftlogo" />
        </div>
        <div
          className="place__left__heading"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1800"
        >
          Historical Places
        </div>
      </div>
      <div className="place__mid">
        <div className="place__mid__img">
          <img src={placemidimg} alt="placeimg" />
        </div>
        <div className="place__mid__heading">SHER SHAH SURI WELL</div>
      </div>
      <div className="place__mid">
        <div className="place__mid__img">
          <img src={placerightimg} alt="placeimg" />
        </div>
        <div className="place__mid__heading__two">DAK BUGLA</div>
      </div>

      {/* <div className="place__right">
        <div className="place__right__img">
          <img src={placerightimg} alt="placerightimg" />
        </div>
        <div className="place__right__heading">DAK BUGLA</div>
      </div> */}
    </section>
  );
}
