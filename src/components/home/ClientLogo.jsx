import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick"; // Don't forget to import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientLogoImg } from "../../data";

export const ClientLogos = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust the number of slides for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust for small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust for extra small screens
        },
      },
    ],
  };

  return (
    <Container className="py-5">
      <h2 className="text-center section-title mb-5">OUR CLIENTS</h2>
      <Slider {...settings} className="text-center">
        {clientLogoImg.map((logo, index) => (
          <div
            key={index}
            className="d-flex justify-content-center p-3 gy-3 logo-style"
          >
            <img
              src={logo.imgSrc}
              alt={logo.altText}
              className="img-fluid"
              style={{ maxHeight: "150px", maxWidth: "150px" }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ClientLogos;
