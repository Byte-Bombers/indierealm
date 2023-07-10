import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signAuthUserWithEmailAndPassword,
  SignInWithGooglePopup,
} from "../../utils/firebase.utils";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    await SignInWithGooglePopup();
    //const userDocRef = await createUserDocumentFromAuth(user);
  };

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/shop");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password for email!");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
