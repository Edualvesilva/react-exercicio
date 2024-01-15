import { NavLink } from "react-router-dom";
import styled from "styled-components";

  const StyledMenu = styled.nav`
    display: flex;
  flex-direction: column;
  background-color: #bd9f9f;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px; /* Add some padding for spacing */
  border-right: 2px solid #333; /* Add a border on the right side */

  a {
    text-decoration: none;
    color: white;
    margin-bottom: 10px; /* Add margin to create spacing between items */
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
