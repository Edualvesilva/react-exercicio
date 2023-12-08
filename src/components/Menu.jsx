import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Menu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/spiderman">Spider-Man</NavLink>
      <NavLink to="/invincible">Invincible</NavLink>
    </Menu>
  );
}
export default Menu;
