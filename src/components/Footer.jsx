import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import youtubeIcon from "/img/svg/yt-icon.svg";
import instagramIcon from "/img/svg/insta-icon.svg";
import linkedinIcon from "/img/svg/link-icon.svg";

export const Footer = () => {
  return (
    <footer className="text-light py-5 bg-dark" id="footer">
      <Container>
        <img src="img/logo.png" alt="" width={"250px"} />
        <Row className="mb-4">
          <Col md={4} className="text-center text-md-start">
            <div className="social-icons mt-3 mb-3 d-flex flex-column gap-2">
              <a
                href="#"
                className="text-light mx-2 d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>YouTube</span>
              </a>
              <a
                href="#"
                className="text-light mx-2 d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="text-light mx-2 d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
          <Col md={4} className="text-start text-md-start d-none d-md-block">
            <h5 className="">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#home-section"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-section"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service-section"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#vision-section"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-start text-md-start">
            <h5 className="">Contact Information</h5>
            <ul className="list-unstyled fs-6">
              <li className="d-flex align-items-center">
                <FaPhoneAlt className="me-2" />
                +91-44-42110202 / +91-9840203873
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="me-2" />
                ceo@shinkoequipments.com
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                DP 112/13, 2ND Main Road, Ambattur Industrial Estate,
                Chennai-600058.
              </li>
            </ul>
            <p className="mt-4">
              Shinko Equipments – Precision Engineering, Excellence Delivered.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center text-md-start">
            <p style={{ fontSize: "14px" }}>
              Copyright © 2024 Shinko Equipments Pvt. Ltd{" "}
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p style={{ fontSize: "14px" }}>
              Powered by{" "}
              <a
                href="https://digiace.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007bff" }}
              >
                DigiAce
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
