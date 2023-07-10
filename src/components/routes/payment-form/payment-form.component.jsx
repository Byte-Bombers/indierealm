import "./payment-form.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { useContext } from "react";
import { useNavigate } from "react-router";

const PaymentForm = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/auth");
  };
  return (
    <>
      {currentUser ? (
        <div>
          <h1>Welcome</h1>
        </div>
      ) : (
        <div>
          <h1>Not Signed in Madafaka</h1>
          <h2 onClick={navigateHandler}>Sign In</h2>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
