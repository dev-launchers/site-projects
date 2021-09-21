import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  width: 80%;
  height: 40px;
  &li,a {
    margin: 8px;
    color: #3a7ca5;
    cursor: pointer;
    border-radius: 5px;
    padding:8px;
  }
  &&li,.pageActive{    
    a{
      color:black;
    }
  }
  & li,
  a:hover {
    color: grey;
  }
  & li,
  a:active {
     color: black;
  }
`;