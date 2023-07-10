import styled from "styled-components";

export const SearchBar = styled.div`
display: flex:
flex-direction: row;
justify-content:space around;
width:800px;
 .search-text{
  margin-left: 510px;
  color: #fff;
  
  width: 350px;
  height: 30px;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    font-size: 20px;
    height: 50px;
    width: 450px;
    transition: all 0.2s ease-in-out;
  }
  

 }




`;

export const CategoryContainer = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
export const CategoryTitle = styled.h2`
  padding-top: 50px;
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  color: #26ff00;
  text-shadow: 0 0 6px #26ff00;
`;
