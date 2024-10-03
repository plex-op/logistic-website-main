import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./components/layout/CommonLayout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/products/ProductDetails";
import Products from "./pages/products/Products";
import SubProductDetails from "./pages/products/SubProductDetails";
// import ProductCard from "./components/home/ProductCard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          {/* Route for product details */}
          <Route path="/product/:productId" element={<ProductDetails />} />

          {/* Dynamic route for sub-product details */}
          <Route
            path="/product/:productId/sub-product/:subProductId"
            element={<SubProductDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
