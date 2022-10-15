import React from "react";
import detailrightfin from "../assets/detailsfin.png";

export function DetailsSection() {
  return (
    <section className="details">
      <div className="detail__heading">Farm House Details</div>
      <div className="detials__all__con">
        <div className="details__left">
          <div className="details__left__heading__all">
            <div className="details__left__heading">Size</div>
            <div className="details__left__heading">Pre-Launch</div>
            <div className="details__left__heading">Launch</div>
            <div className="details__left__heading">Post-Launch</div>
          </div>
          <div className="details__left__entries_all">
            <div className="details__left__entries">
              <div className="details__left__entries__heading">4 Kanal</div>
              <div className="details__left__entries__heading">8 Kanal</div>
              <div className="details__left__entries__heading">12 Kanal</div>
            </div>
            <div className="details__left__entries">
              <div className="details__left__entries__heading">4 Million</div>
              <div className="details__left__entries__heading">14 Million</div>
              <div className="details__left__entries__heading">20 Million</div>
            </div>

            <div className="details__left__entries">
              <div className="details__left__entries__heading">10 Million</div>
              <div className="details__left__entries__heading">16 Million</div>
            </div>
            <div className="details__left__entries">
              <div className="details__left__entries__heading">12 Million</div>
              <div className="details__left__entries__heading">
                19.2 Million
              </div>
            </div>
          </div>
        </div>
        <div className="details__right">
          <div className="details__right__img">
            <img src={detailrightfin} alt="detailsimg" />
          </div>
        </div>
      </div>
    </section>
  );
}
