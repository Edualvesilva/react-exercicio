import { NavLink } from "react-router-dom";
import styled from "styled-components";

  const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  background-color: #bd9f9f;
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
function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/spiderman">Spider-Man</NavLink>
      <NavLink to="/invincible">Invincible</NavLink>
    </StyledMenu>
  );
}
export default Menu;
