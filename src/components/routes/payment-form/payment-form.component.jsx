import "./payment-form.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import FormInput from "../../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";

const PaymentForm = () => {
  const { currentUser } = useContext(UserContext);
  //   console.log(currentUser);
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <h1>Pay With Card: </h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Card Information"
              onChange={handleChange}
              type="number"
              maxlength="16"
              pattern="\d{10}"
              title="Please enter exactly 16 digits"
              name="cardInformation"
              value={cardInformation}
            />

            <FormInput
              label="MM"
              onChange={handleChange}
              type="number"
              max="12"
              pattern="\d{10}"
              name="month"
              value={month}
            />

            <FormInput
              label="YY"
              onChange={handleChange}
              type="number"
              name="year"
              value={year}
            />

            <FormInput
              label="CVV"
              onChange={handleChange}
              type="password"
              name="CVV"
              value={CVV}
            />

            <FormInput
              label="Name"
              onChange={handleChange}
              type="text"
              name="userName"
              value={userName}
            />

            <FormInput
              label="Country"
              onChange={handleChange}
              type="text"
              name="country"
              value={country}
            />

            <FormInput
              label="ZIP Code"
              onChange={handleChange}
              type="number"
              name="zipCode"
              value={zipCode}
            />
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
              Pay
            </Button>
          </form>
        </>
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
