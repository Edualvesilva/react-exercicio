import styled from "styled-components";
import Menu from "./Menu";

const StyledHeader = styled.header`
  background-color: black;
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
      <Menu />
    </StyledHeader>
  );
}

export default Header;
