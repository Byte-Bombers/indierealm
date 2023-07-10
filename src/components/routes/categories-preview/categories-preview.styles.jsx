import styled from "styled-components";

export const SearchBar = styled.div`
display: flex:
flex-direction: row;
justify-content:space around;
width:900px;
 input{
  margin-left: 450px;
  width: 350px;
  height: 30px;
  border-radius: 6px;
  background-color: transparent;
  color: #fff;
  &:focus {
    font-size: 20px;
    height: 50px;
    width: 450px;
    transition: all 0.2s ease-in-out;
  }
  

 }




`;
