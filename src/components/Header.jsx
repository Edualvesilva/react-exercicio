import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #fc0000;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Welcome to the Site</h1>
      <hr />
    </StyledHeader>
  );
}

export default Header;
