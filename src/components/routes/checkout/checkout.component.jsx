import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../../contexts/cart.context.jsx";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("payment");
  };
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ₹{cartTotal}</Total>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={navigateHandler}
      >
        Proceed To Pay
      </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
