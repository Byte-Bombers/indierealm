import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">₹{price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
