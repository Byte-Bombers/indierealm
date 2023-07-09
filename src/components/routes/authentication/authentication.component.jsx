import { AuthenticationContainer } from "./authentication.styles.jsx";

import SignUpForm from "../../sign-up/sign-up.component.jsx";
import SignInForm from "../../sign-in/sign-in.component.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
