import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  width: 25%;
  padding-left: 75px;
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    padding-left: 55px;
  }
`;

export const Price = styled.span`
  width: 25%;
  padding-left: 95px;
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    padding-left: 70px;
  }
`;

export const RemoveButton = styled.div`
  width: 25%;
  padding-left: 160px;
  cursor: pointer;
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    padding-left: 120px;
  }
`;
