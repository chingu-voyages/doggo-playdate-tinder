import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './Header.styles.jsx';

const Header = () => {
  return (
    <StyledHeader.Container className="App-header">
      <StyledHeader.Logo>
        <Link to="/">Doggo</Link>
      </StyledHeader.Logo>
      <StyledHeader.Navigation role="navigation">
        <ul>
          <StyledHeader.NavItem to="/about">About</StyledHeader.NavItem>
          <StyledHeader.NavItem to="/login">Login</StyledHeader.NavItem>
        </ul>
      </StyledHeader.Navigation>
    </StyledHeader.Container>
  );
};

export default Header;
