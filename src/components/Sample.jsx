import React, { useState } from "react";
import "./sample.css";

const Sample = () => {
  // Array with brands and image URLs
  const [brands, setBrands] = useState([
    { name: "Nike", img: "img/1.jpg" },
    { name: "Puma", img: "img/2.jpg" },
    { name: "Yeeze", img: "img/3.jpg" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % brands.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + brands.length) % brands.length);
  };

  return (
    <div className="store-page-preview">
      <h2>Store Page</h2>
      <div className="image-container">
        {brands.map((brand, index) => (
          <div
            key={brand.name}
            className={`image ${currentIndex === index ? "active" : ""}`}
          >
            {currentIndex === index && (
              <>
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="brand-image"
                  style={{ width: "100%" }}
                />
                <h3>{brand.name}</h3>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Sample;
