import { useNavigate } from "react-router-dom";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ title, product }) => {
  const { name, price, imageUrl } = product;
  const navigate = useNavigate();
  const NavigateHandler = () => navigate(`/shop/${title}/${name}`);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>₹{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={NavigateHandler}
      >
        View Game
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
