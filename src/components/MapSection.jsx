export function MapSection({}) {
  return (
    <section className="location__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16852.17927488321!2d71.92417749333784!3d33.05919919418349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392753df4792d2a5%3A0x17fb76cc5d3f42cc!2sHoliday%20Country%20Club!5e0!3m2!1sen!2s!4v1665835261259!5m2!1sen!2s"
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
