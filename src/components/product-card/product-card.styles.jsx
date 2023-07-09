import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      transition: all 0.2s ease-in-out;
      opacity: 0.8;
      box-shadow: 0 0 10px #26ff00;
      cursor: pointer;
    }

    button {
      transition: all 0.2s ease-in-out;
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #fff;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  width: 20%;
  text-align: center;
  font-size: 15px;

  border-radius: 5px;
  background-color: rgba(129, 129, 129, 0.3);
  allign-items: center;
`;
