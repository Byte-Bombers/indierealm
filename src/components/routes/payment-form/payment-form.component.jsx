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
        <div>
          <h1>Welcome</h1>
        </div>
      ) : (
        <div className="not-signed">
          <h1>
            You need to <h2 onClick={navigateHandler}>Sign In</h2> before
            proceeding
          </h1>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
