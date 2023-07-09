import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #58d356;
  border-radius: 5px;
  background-color: #171717;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #58d356;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
