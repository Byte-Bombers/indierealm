import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 10px;
  border: 0.3rem dashed white;
  background-color: #fff;
  border-radius: 20px;

  h2 {
    margin: 10px 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;

    border: 0.3rem dashed green;
    border-radius: 0.8rem;
  }
`;
