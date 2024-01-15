import styled from "styled-components";
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
  background-color: aliceblue;
  box-shadow: darkblue 0 0 1px inset;
  border: black solid 1px;
  h2,
  p {
    padding: 0.5rem 0;
  }
  margin: 0 auto; /* Center the content horizontally */
  max-width: 800px; /* Add a max-width for better readability */
  padding: 20px;
`;

export default Container;
