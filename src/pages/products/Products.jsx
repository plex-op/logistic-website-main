import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { productData } from "../../data"; // Ensure correct data path
import ProductCard from "../../components/home/ProductCard"; // Adjust import path as needed

const Products = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center section-title mb-5">PRODUCTS</h2>

      <Row className="g-4">
        {productData.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard
              imgSrc={product.imgSrc}
              title={product.title}
              productId={product.id} // Pass productId for navigation
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
