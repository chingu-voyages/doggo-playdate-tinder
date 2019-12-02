import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledHeader from './Header.styles';
import { userLogout } from '../../redux/actions';

const Header = ({ user, logout, history }) => {
  const handleLogout = async () => {
    await logout();
    history.push('/');
  };
  return (
    <StyledHeader.Container className="App-header">
      <StyledHeader.Logo>
        <Link to="/">Doggo</Link>
      </StyledHeader.Logo>
      <StyledHeader.Navigation role="navigation">
        <ul>
          <StyledHeader.NavItem to="/about">About</StyledHeader.NavItem>
          {user.username ? (
            <>
              <StyledHeader.NavItem to="/my_profile">My Profile</StyledHeader.NavItem>
              <StyledHeader.Button onClick={() => handleLogout()}>Logout</StyledHeader.Button>
            </>
          ) : (
            <StyledHeader.NavItem to="/login">Login</StyledHeader.NavItem>
          )}
        </ul>
      </StyledHeader.Navigation>
    </StyledHeader.Container>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userLogout())
});

export default connect(null, mapDispatchToProps)(Header);
