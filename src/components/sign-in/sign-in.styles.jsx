import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 5px;
  padding-top: 40px;
  background-color: #fff;
  border-radius: 20px;

  border: 0.3rem dashed white;

  h2 {
    margin: 10px 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;

    border: 0.3rem dashed blue;
    border-radius: 0.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
