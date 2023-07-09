import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  color: gray;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  color: #26ff00;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #03a800;
    box-shadow: 0 0 30px #58d356;
  }
`;
