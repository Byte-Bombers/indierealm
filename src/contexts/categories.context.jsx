import { createContext, useState, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../src/utils/firebase.utils";
import SHOP_DATA from "../../src/shop-data";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };
  /* useEffect(() => {
    const setCategoriesInDB = async () => {
      await addCollectionAndDocuments("categories", SHOP_DATA);
    };
    setCategoriesInDB();
  }, []); 
  */
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoryMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
