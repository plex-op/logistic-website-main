import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { productData } from "../../data"; // Import your product data

const SubProductDetails = () => {
  const { productId, subProductId } = useParams(); // Get productId and subProductId from URL

  const product = productData.find((p) => p.id === parseInt(productId)); // Find product
  const subProduct = product?.subProducts.find(
    (sp) => sp.id === parseInt(subProductId)
  ); // Find sub-product

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Handle image navigation
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: subProduct?.title,
  }); // Form data state

  if (!subProduct) {
    return <div>Sub-product not found</div>;
  }

  // Function to navigate images
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % subProduct.thumbnails.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? subProduct.thumbnails.length - 1 : prevIndex - 1
    );
  };

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate Formspree here or handle form submission logic
    // For Formspree, simply make sure the `action` in the form points to your Formspree endpoint.
    // Example below uses a demo form link.
  };

  return (
    <Container className="mt-5 p-5">
      <Row>
        {/* Product Image with arrows */}
        <Col md={6} className="position-relative">
          <img
            src={subProduct.thumbnails[currentImageIndex]}
            alt={subProduct.title}
            style={{ width: "100%", borderRadius: "10px", height: "100%" }}
          />
          {/* Arrows for navigating images */}
          <button
            className="arrow left-arrow"
            onClick={handlePrevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              transform: "translateY(-50%)",
            }}
          >
            &#8592;
          </button>
          <button
            className="arrow right-arrow"
            onClick={handleNextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              transform: "translateY(-50%)",
            }}
          >
            &#8594;
          </button>
        </Col>

        {/* Product Details */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div>
            {/* Product Title */}
            <h2 className="product-title">{subProduct.title}</h2>

            {/* Product Stock Status */}
            <p style={{ color: subProduct.inStock === "INSTOCK" ? "green" : "red" }}>
              {subProduct.inStock === "INSTOCK" ? "In Stock" : "Out of Stock"}
            </p>

            {/* Product Code */}
            <p>
              <strong>Product Code:</strong> {subProduct.productCode}
            </p>

            {/* Product Dimensions */}
            <p>
              <strong>Dimensions:</strong> {subProduct.dimensions.height} (H) x{" "}
              {subProduct.dimensions.width} (W) - Weight: {subProduct.dimensions.weight}
            </p>

            {/* Enquiry Button */}
            <div className="d-flex align-items-center">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Kindly contact us for further details
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal for Enquiry Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree form ID
            method="POST"
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formProduct">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="product"
                value={formData.product}
                readOnly
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SubProductDetails;
