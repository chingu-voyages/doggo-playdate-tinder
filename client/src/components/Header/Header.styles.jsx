import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Container = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.white};
`;

const Logo = styled.h1`
  font-size: 2em;
  font-weight: 800;

  & a {
    color: ${props => props.theme.linkText};
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 6px 8px;
`;

const NavItem = styled(Link)`
  margin: 0 36px;
  text-decoration: none;
  color: ${props => props.theme.linkText};
  font-size: 1.6em;
`;

const StyledHeader = {
  Container,
  Logo,
  Navigation,
  NavItem,
  Button
};

export default StyledHeader;
