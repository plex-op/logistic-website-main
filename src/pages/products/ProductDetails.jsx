import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { productData } from "../../data";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Banner Section */}
      <section
        className="product-banner mt-5"
        style={{ backgroundColor: "#f1f1f1", padding: "40px 0" }}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <h1>{product.title}</h1>
              <p className="lead">
                Explore the various sub-products we offer in this category!
              </p>
              <img
                src={product.imgSrc}
                alt={product.title}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sub-products Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Sub-products</h2>
        <Row>
          {product.subProducts.map((subProduct) => (
            <Col md={4} sm={6} xs={12} key={subProduct.id} className="mb-4">
              <Link
                to={`/product/${productId}/sub-product/${subProduct.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="h-100 text-center">
                  <Card.Img
                    variant="top"
                    src={subProduct.imgSrc}
                    alt={subProduct.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "calc(.375rem - 1px)",
                      borderTopRightRadius: "calc(.375rem - 1px)",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{subProduct.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
