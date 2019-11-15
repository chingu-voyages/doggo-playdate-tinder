import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Container = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.dark};
`;

const Logo = styled.h1`
  font-size: 2em;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const NavItem = styled(Link)`
  margin: 0 12px;
  text-decoration: none;
  color: ${props => props.theme.dark};
  font-size: 1.6em;
`;

const StyledHeader = {
  Container,
  Logo,
  Navigation,
  NavItem
};

export default StyledHeader;
