import { useContext, useState } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const [searchString, setSearchString] = useState("");
  const { categories } = useContext(CategoriesContext);
  const genreArray = Object.keys(categories);

  const onSearchChange = (event) => {
    const searchResult = event.target.value.toLowerCase();
    setSearchString(searchResult);
  };

  const filteredGenre = genreArray.filter((genre) =>
    genre.toLowerCase().includes(searchString)
  );

  return (
    <>
      {/* <input
        type="text"
        onChange={onSearchChange}
        placeholder="search by genre"
      /> */}
      {filteredGenre &&
        filteredGenre.map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </>
  );
};

export default CategoriesPreview;
