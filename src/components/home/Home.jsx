import Carousel from "react-bootstrap/Carousel";
import { homeImgs } from "../../data";

function Home() {
  return (
    <section id="home-section">
      <Carousel controls={false} indicators={true}>
        {homeImgs.map((data, index) => (
          <Carousel.Item key={index} interval={data.interval}>
            {/* Assuming you're dynamically using images from the data */}
            <div style={{ position: "relative" }}>
              <img
                src={data.imgSrc}
                alt={data.altText}
                className="d-block w-100 vh-100 home-img"
                style={{
                  objectFit: "cover", // Ensures the image covers the container nicely
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                }}
              ></div>
            </div>
            <Carousel.Caption>
              <h3
                data-aos="fade-left"
                style={{ fontSize: "32px", color: "orange", fontWeight: "700" }}
                className="home-heading"
              >
                {data.title}
              </h3>
              <p>{data.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Home;
