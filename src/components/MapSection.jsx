import React from "react";

export function MapSection({}) {
  return (
    <section className="location__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8063797334576!2d74.37747145064782!3d31.474511956463058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a286809427%3A0x66f8b31237e79ada!2sDSME%20Global%20Links!5e0!3m2!1sen!2s!4v1663481877258!5m2!1sen!2s"
        loading="lazy"
        style={{
          width: "100%",
          height: 500,
          border: "none",
          margin: "4em 0em",
        }}
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
