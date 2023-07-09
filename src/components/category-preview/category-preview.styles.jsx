import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  padding: 10px;
`;

export const Preview = styled.div`
  display: flex;

  gap: 1.5rem;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr) / auto-flow;
    gap: 3rem;
  }
`;
