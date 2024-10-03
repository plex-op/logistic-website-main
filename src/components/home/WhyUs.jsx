import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaStar, FaHeart } from "react-icons/fa"; // Import Font Awesome icons

const content = [
  {
    icon: FaCheckCircle,
    color: "#007bff",
    title: "Precision and Expertise",
    text: " With over 20 years of industry experience, Shinko Equipment specializes in high-quality press tools, sheet metal components, and CNC machining with precision up to 0.001 micron.",
  },
  {
    icon: FaStar,
    color: "#ffc107",
    title: "Strict Quality Control",
    text: "Shinko maintains rigorous quality control systems, ensuring that all products meet international standards and are crafted to exact customer specifications.",
  },
  {
    icon: FaHeart,
    color: "#e74c3c",
    title: "Skilled Workforce and Advanced Technology",
    text: "Their team of skilled engineers and craftsmen utilizes advanced CAD, CAM, and SolidWorks software for precise design and production.",
  },
  {
    icon: FaCheckCircle,
    color: "#007bff",
    title: "Efficient Project Management",
    text: "Equipped with the resources and infrastructure to handle multiple projects at once, Shinko ensures timely and efficient delivery of customized solutions.",
  },
];

export const WhyUs = () => {
  return (
    <section id="vision-section">
      <Container className="py-5">
        <h2 className="text-center section-title mb-5">VISION</h2>
        <Row className="d-flex justify-content-center">
          {/* Left Side Content */}
          <Col
            xs={12}
            md={3}
            className="left-right-content d-flex flex-column justify-content-between align-items-center mb-4 mb-md-0"
          >
            {content.slice(0, 2).map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={30} color={item.color} className="mb-2" />{" "}
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </Col>

          {/* Central Content */}
          <Col xs={10} md={6} className="central-content text-center">
            <div className="content-overlay">
              <h2>WHY CHOOSE US</h2>
              <p>This is a sample text. Insert your desired text here.</p>
            </div>
          </Col>

          {/* Right Side Content */}
          <Col
            xs={12}
            md={3}
            className="left-right-content d-flex flex-column justify-content-between align-items-center mt-4 mb-4 mb-md-0 mt-md-0"
          >
            {content.slice(2).map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={30} color={item.color} className="mb-2" />{" "}
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
