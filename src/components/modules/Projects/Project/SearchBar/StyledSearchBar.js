import styled from "styled-components";
import { rem } from 'polished'

export const SearchBox = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 1rem;
`;

export const Search = styled.input`
  cursor: text;
  max-width: ${rem("192px")};
  height: 2rem;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url(/src/icons/search.svg) 0.6rem 0.5rem no-repeat;
  background-size: 1rem;
  ::placeholder {
    color:#d6d4d5;
  }
`;
