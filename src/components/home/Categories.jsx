import React, { useState } from "react";
import { Tab, Nav, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const tabs = [
  { eventKey: "home", title: "General CNC" },
  { eventKey: "profile", title: "Grinding Machine" },
  { eventKey: "contact", title: "Lathe and CNC VTL" },
  { eventKey: "about", title: "Milling Machine" },
  { eventKey: "services", title: "General Machine Peripherals" },
  { eventKey: "team", title: "Inspection Capabalities" },
];

const cardContent = {
  home: [
    {
      title: "VMC",
      text: "MAKINO, V-55, Japan. Travel Length X-920mm Y -510mm Z-460mm.",
      imgSrc: "/img/2.jpg",
    },
    {
      title: "CNC LATHE",
      text: "MAZAK - Quick Turn Smart 300M DIA 420 X 1282mm.",
      imgSrc: "/img/12.jpg",
    },
    // Add more home-specific cards here
  ],
  profile: [
    {
      title: "SURFACE GRINDING MACHINE (OKOMOTO)",
      text: "X 450MM Y 200MM Z 350MM.",
      imgSrc: "/img/10.PNG",
    },
    {
      title: "SURFACE GRINDING MACHINE (MHT)",
      text: "X 400MM Y 200MM Z 400MM.",
      imgSrc: "/img/8.jpg",
    },
    // Add more profile-specific cards here
  ],
  contact: [
    {
      title: "ALL GEAR LATHE",
      text: "ALL GEAR LATHE TONGIL, TIPL - 4 210 X 400MM.",
      imgSrc: "/img/6.jpg",
    },
    // Add more contact-specific cards here
  ],
  about: [
    {
      title: "KOTOBUKI PLANO MILLER",
      text: "Table Size - 1100mm X 3000mm.",
      imgSrc: "/img/9.jpg",
    },
    {
      title: "VERTICAL MILLING MACHINE",
      text: "YAMAZAKI GIKEN, YZ NC 450 X 1400mm Y 500mm Z 500mm.",
      imgSrc: "/img/3.jpg",
    },
    {
      title: "UNIVERSAL MILLING MACHINE",
      text: "NIIGATA, 2UMD X 1100mm Y 400mm Z 300mm Spindle Speed 1750RPM.",
      imgSrc: "/img/4.jpg",
    },
    // Add more about-specific cards here
  ],
  services: [
    {
      title: "HORIZONTAL BORING MACHINE",
      text: "IKEGAI, DA85T X 1000mm Y 900mm Z 900mm Spindle Speed = 1250RPM.",
      imgSrc: "/img/13.jpg",
    },
    {
      title: "JIG BORING (DOUBLE COLUMN)",
      text: "SHIN NIPPON KOKI, X 1700mm Y 1000mm Z 600mm.",
      imgSrc: "/img/14.PNG",
    },
    {
      title: "JIG BORING (SINGLE COLUMN) YAMAZAKI GIKEN",
      text: "X 1600mm Y 460mm Z 500mm.",
      imgSrc: "/img/15.PNG",
    },
    {
      title: "RADIAL DRILLING MACHINE",
      text: "Length of Arm - 1000mm , Diameter of column - 35mm.",
      imgSrc: "/img/17.PNG",
    },
    {
      title: "JIG BORING (SINGLE COLUMN)",
      text: "IKEDA, X 1600mm Y 460mm Z 500mm.",
      imgSrc: "/img/16.PNG",
    },
  ],
  team: [
    {
      title: "Coordinate Measuring Machine – ZEISS - Spectrum II",
      text: "Probe = RENSHAW PROBE, Measurable Value X= 900mm, Y= 1100 mm, Z=500mm, Resolution: 0.001 micro.",
      imgSrc: "/img/5.PNG",
    },
    {
      title: "TRIMOS",
      text: "Height Master - Trimos v3, Measuring Range 711mm, Application Range 812mm, Max. Resolution 0.001m Repeatability 2um.",
      imgSrc: "/img/7.PNG",
    },
  ],
};

export const Categories = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section id="service-section">
      <Container className="py-5">
        <h2 className="text-center section-title mb-5">OUR SERVICES</h2>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="home"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
        >
          <Nav variant="pills" className="mb-3 justify-content-center">
            {tabs.map((tab) => (
              <Nav.Item key={tab.eventKey}>
                <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            {tabs.map((tab) => (
              <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
                <Row className="gy-3">
                  {cardContent[tab.eventKey]?.map((card, index) => (
                    <Col
                      xs={12}
                      sm={6}
                      md={4}
                      className="d-flex justify-content-center"
                    >
                      <Card className="custom-card mb-3">
                        <div className="card-image">
                          <Card.Img
                            variant="top"
                            src={card.imgSrc}
                            className="img-fluid"
                          />
                          <div className="hover-text">
                            <Card.Text>{card.text}</Card.Text>
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Title>{card.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Categories;
