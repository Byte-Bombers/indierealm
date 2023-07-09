import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 10px;

  width: 74%;
  justify-content: space-between;
  background-color: transparent;
  margin: 40px auto 0;

  @media screen and (max-width: 700px) {
    margin: 5px 5px 5px 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr) / auto-flow;
    gap: 2rem;
  }
`;
