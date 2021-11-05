import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const ProjectContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
  width: 100%;
  height: 100%;
  max-width: 530px;
  color: black;
  @media (orientation: portrait) {
    width: 90vw;
  }
`;
