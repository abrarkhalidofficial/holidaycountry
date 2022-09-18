import React from "react";
import eventlogo from "../assets/event-logo.png";
import eventimg from "../assets/event-section.png";

export function EventSection() {
  return (
    <section className="event">
      <div className="event__img">
        <img src={eventimg} alt="" />
      </div>
      <div className="event__con">
        <div className="event__con__logo">
          <img src={eventlogo} alt="" />
        </div>
        <div className="event__con__heading">Event Lawn</div>
        <div className="event__con__info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </div>
      </div>
    </section>
  );
}
