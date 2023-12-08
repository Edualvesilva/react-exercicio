import styled from "styled-components";
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;
  border: black solid 1px;
  h2,
  p {
    padding: 0.5rem 0;
  }
`;

export default Container;
