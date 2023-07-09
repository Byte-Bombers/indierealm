import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import ProductPage from "../product-page/product-page.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category">
        <Route index element={<Category />} />
        <Route path=":product" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default Shop;
