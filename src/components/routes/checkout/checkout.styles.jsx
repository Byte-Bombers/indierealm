import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  color: #fff;

  @font-face {
    font-family: "sf pro display bold";
    src: url(../../../assets/fonts/SFPRODISPLAYBOLD.OTF);
  }
  Button {
    font-family: "sf pro display bold";
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const Saving = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  margin-top: 30px;
  margin-left: auto;
  border-radius: 5px;
  background-color: antiquewhite;
  font-size: 18px;
  @font-face {
    font-family: "sf pro display bold";
    src: url(../../../assets/fonts/SFPRODISPLAYBOLD.OTF);
  }
  font-family: "sf pro display bold";
  color: black;
`;
