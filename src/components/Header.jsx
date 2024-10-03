import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa"; // Importing React Icons

function Header() {
  return (
    <Navbar
      expand="lg"
      className="mb-3 fixed-top"
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <Navbar.Brand href="#home-section">
          <img src="/img/logo.png" alt="" width={"220px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 list_items">
              <Nav.Link href="#home-section">
                {/* <FaHome className="me-2" />  */}
                Home
              </Nav.Link>
              <Nav.Link href="#about-section">
                {/* <FaInfoCircle className="me-2" /> About */}
                About
              </Nav.Link>
              <Nav.Link href="#about-section">
                {/* <FaInfoCircle className="me-2" /> About */}
                Products
              </Nav.Link>
              <Nav.Link href="#service-section">
                {/* <FaServicestack className="me-2" /> Service */}
                Service
              </Nav.Link>
              <Nav.Link href="#vision-section">
                {/* <FaServicestack className="me-2" /> Service */}
                Vision
              </Nav.Link>
              <Nav.Link href="#contact-section">
                {/* <FaPhone className="me-2" /> Contact */}
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
