import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #f39c12;
  }
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">Inicio</StyledLink>
      <StyledLink to="/about">Sobre</StyledLink>
      <StyledLink to="/contact">Contato</StyledLink>
    </Nav>
  );
}

export default Navbar;