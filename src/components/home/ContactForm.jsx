import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const contactInfoStyle = {
    fontSize: "1.1rem", // Slightly larger font for better readability
    color: "#333", // A modern dark gray font color
    lineHeight: "1.6", // Improve spacing between lines
  };

  const contactHeadingStyle = {
    color: "#6a11cb", // Same color scheme as the form
    fontWeight: "bold", // Bold heading
    marginBottom: "20px",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "1.3rem", // Larger icons to match the font size
    color: "#6a11cb", // Icon color to match the form's gradient
  };

  return (
    <section id="contact-section">
      <Container className="mt-5 mb-5">
        <h2 className="text-center section-title mb-5">Contact</h2>
        <Row>
          {/* Left Column - Form */}
          <Col md={6}>
            <div
              className="p-5 text-white"
              style={{
                // background: "linear-gradient(to right, #6a11cb, #2575fc)",
                background: "#007bff",
                borderRadius: "8px",
              }}
            >
              <h3>Send us a message</h3>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Your Number"
                    maxLength="10" // Restrict input to 10 digits
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Column - Contact Info */}
          <Col md={6} className="d-flex align-items-center">
            <div style={contactInfoStyle}>
              <h3 style={contactHeadingStyle}>Contact us</h3>
              <p>We're open for any suggestion or just to have a chat</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaMapMarkerAlt style={iconStyle} />
                  <span>
                    DP 112/13, 2ND Main Road, Ambattur Industrial Estate,
                    Chennai-600058.
                  </span>
                </li>
                <li className="mb-3">
                  <FaPhoneAlt style={iconStyle} />
                  <span>+91-44-42110202 / +91-9840203873</span>
                </li>
                <li className="mb-3">
                  <FaEnvelope style={iconStyle} />
                  <span>ceo@shinkoequipments.com</span>
                </li>
                <li>
                  <FaGlobe style={iconStyle} />
                  <span>www.shinkoequipments.com</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
