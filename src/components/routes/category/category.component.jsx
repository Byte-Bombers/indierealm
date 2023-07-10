import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import {
  CategoryContainer,
  CategoryTitle,
  SearchBar,
} from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [searchString, setSearchString] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  const onSearchChange = (event) => {
    const searchResult = event.target.value.toLowerCase();
    setSearchString(searchResult);
  };

  const filteredNames = products.filter((product) =>
    product.name.toLowerCase().includes(searchString)
  );

  return (
    <>
      <SearchBar>
        <input
          className="search-text"
          type="text"
          onChange={onSearchChange}
          placeholder="search by name"
        />
      </SearchBar>

      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {filteredNames &&
          filteredNames.map((product) => (
            <ProductCard title={category} key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
