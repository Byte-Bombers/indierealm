import styled from "styled-components";

import { ReactComponent as SvgIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconStyle = styled(SvgIcon)`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);

  &:hover {
    transition: all 0.15s ease-in-out;
    box-shadow: 0 0 30px #58d356;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
