import "./success.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

const Success = () => {
  const { currentUser } = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);
  useEffect(() => setCartItems([]), []);
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/");
  return (
    <div>
      {currentUser ? (
        <div className="congo">
          <h1>Congratulations, you have completed your payment</h1>
          <h2>
            Continue to your <span onClick={navigateHandler}>Home</span>
          </h2>
        </div>
      ) : (
        <div className="unsigned">
          <h2>
            Not Logged In,
            <span> Sign In </span> Now
          </h2>
        </div>
      )}
    </div>
  );
};

export default Success;
