import "./payment-form.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import Secure from "../../../assets/card-icon/lock.svg";
import { CartContext } from "../../../contexts/cart.context";

const PaymentForm = () => {
  const { currentUser } = useContext(UserContext);
  const { cartTotal } = useContext(CartContext);
  //   console.log(cartTotal);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/auth");
  };
  const defaultFormFields = {
    cardInformation: "",
    month: "",
    year: "",
    CVV: "",
    userName: "",
    country: "",
    zipCode: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { cardInformation, month, year, CVV, userName, country, zipCode } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (month < 1 || month > 12) {
      alert("Invalid month");
      return;
    }

    if (CVV.length !== 3) {
      alert("Invalid CVV");
      return;
    }

    try {
      resetFormFields();
      navigate("success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <div className="pay-section">
            <div className="pay-heading">
              <h1>Pay With Card: </h1>
              <div className="secure">
                <img src={Secure} alt={"secure"} />
                <h3>secure pay</h3>
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label className="cardinfo">
                Card Information
                <input
                  onChange={handleChange}
                  type="number"
                  maxLength="16"
                  pattern="\d{10}"
                  title="Please enter exactly 16 digits"
                  name="cardInformation"
                  placeholder="1234 1234 1234 1234"
                  value={cardInformation}
                />
              </label>

              <div className="small-infos">
                <label className="smol">
                  MM
                  <input
                    onChange={handleChange}
                    type="number"
                    max="12"
                    pattern="\d{10}"
                    name="month"
                    value={month}
                  />
                </label>

                <label className="smol">
                  YY
                  <input
                    onChange={handleChange}
                    type="number"
                    name="year"
                    value={year}
                  />
                </label>

                <label className="smol">
                  CVV
                  <input
                    onChange={handleChange}
                    type="password"
                    name="CVV"
                    value={CVV}
                  />
                </label>
              </div>

              <div className="names">
                <label className="beeg">
                  Name
                  <input
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    value={userName}
                  />
                </label>

                <label className="beeg">
                  Country
                  <input
                    onChange={handleChange}
                    type="text"
                    name="country"
                    value={country}
                  />
                </label>

                <label className="beeg">
                  ZIP Code
                  <input
                    onChange={handleChange}
                    type="number"
                    name="zipCode"
                    value={zipCode}
                  />
                </label>
              </div>

              <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
                Pay
              </Button>
            </form>
          </div>
        </>
      ) : (
        <div className="not-signed">
          <h1>
            You need to <h2 onClick={navigateHandler}>Sign In</h2> to proceed
          </h1>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
