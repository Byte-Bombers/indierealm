import { useContext } from "react";
import "./product-page.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../../contexts/categories.context";
import { CartContext } from "../../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";

const ProductPage = () => {
  const { category, product } = useParams();
  const { categories } = useContext(CategoriesContext);
  const { addCartItems } = useContext(CartContext);
  const productsArray = categories[category];
  const getProductObj = () => {
    if (productsArray) {
      // console.log(productsArray);
      const newProduct = productsArray.filter((item) => item.name === product);
      // console.log(newProduct);
      return newProduct[0];
    }
  };
  const productObj = getProductObj();
  // console.log(productObj.id);

  const addCartItemsHandler = () => {
    if (productObj) {
      addCartItems(productObj);
    }
  };

  return (
    <div className="product-page-container">
      {productObj && (
        <div className="product-details">
          <div className="upper-section">
            <img
              className="pic"
              src={productObj.imageUrl}
              alt={productObj.name}
            />
            <div className="shortinfos">
              <h1 className="name">{productObj.name}</h1>
              <div className="dev-year">
                <h2 className="developer">By {productObj.developer} </h2>
                <h2 className="year">{productObj.year}</h2>
              </div>
              <h2 className="genre">Genre: {category}</h2>
            </div>
            <div className="mid-infos">
              <div className="rating-players">
                <h2 className="ratings">Ratings: {productObj.ratings}</h2>
                <h2 className="players">Players: {productObj.players}</h2>
              </div>

              <h2 className="gamesize">Size: {productObj.gameSize}</h2>
              <div className="price-box">
                <h2 className="mrp">
                  <s>₹{productObj.mrp}</s>
                </h2>
                <h2 className="price">₹{productObj.price}</h2>
              </div>
            </div>
          </div>

          <div className="devices-checkout">
            <div className="d-icons">
              {productObj.devices.map((deviceImg) => (
                <img src={deviceImg} alt={"Eligible Device"} />
              ))}
            </div>
            <div className="add-to-cart">
              <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addCartItemsHandler}
              >
                Add To Cart
              </Button>
            </div>
          </div>

          <h2 className="description">❝{productObj.description}❞</h2>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
