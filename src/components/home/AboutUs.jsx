import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { aboutUsContent } from "../../data";

export const AboutUs = () => {
  return (
    <section id="about-section">
      <Container className="about-us-container py-5">
        <h2 className="text-center section-title mb-5">About Us</h2>
        {aboutUsContent.map((data, index) => (
          <Row
            key={index}
            className={`about-container mb-5 d-flex align-items-center ${
              index % 2 === 0 ? "flex-md-row-reverse" : ""
            }`} // Alternating image and text position
          >
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <div className="about-content p-4">
                <p>{data.description}</p>
              </div>
            </Col>
            <Col xs={12} md={6} className="p-0">
              <div className="about-img">
                <img
                  src={data.imgSrc}
                  alt={data.altText}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default AboutUs;
