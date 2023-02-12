import React from "react";

const RandomMap = () => {
  return (
    <div>
      <iframe
        title="Office Address which 10 mins ride to me"
        className="w-full "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.2186433509164!2d16.323382115640683!3d48.18313867922704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da811176aa8b1%3A0xed9e3ade74bc0fe1!2sSch%C3%B6nbrunner%20Schlo%C3%9Fstra%C3%9Fe%205%2C%201120%20Wien!5e0!3m2!1sen!2sat!4v1676234944563!5m2!1sen!2sat"
        width={"1920"}
        height={"300"}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default RandomMap;
