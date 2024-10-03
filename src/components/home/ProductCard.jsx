import "./home.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const ProductCard = ({ imgSrc, title, productId }) => {
  const navigate = useNavigate(); // Create navigation function

  // Handle card click and navigate to the product details page
  const handleCardClick = () => {
    navigate(`/products/${productId}`); // Navigate to product details based on productId
  };

  return (
    <div
      className="product-card"
      onClick={handleCardClick} // Add click event
    >
      <img
        src={imgSrc}
        alt={title}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
        className="card-image"
      />
      <div className="card-button">{title}</div>
    </div>
  );
};

export default ProductCard;
