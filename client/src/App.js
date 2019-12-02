import React from 'react';
import { connect } from 'react-redux';
import { reset as resetStyles } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import Content from './components/styled/Content';
import LandingPage from './pages/landing/landing';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import CreateProfile from './pages/createProfile';
import DashboardPage from './pages/dashboard/dashboard';
import MyProfilePage from './pages/myProfile/myProfile';
import PrivateRoute from './PrivateRoute';

const GlobalStyles = createGlobalStyle`
    ${resetStyles}
    *,*:before,*:after {
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
    body {
      font-size: 62.5%;  /* 1em = 10px, 1.4em = 14px, etc */
    }
    .App {
    text-align: center;
    /* background: ${props => props.theme.dark}; */
    }
    button, link {
      cursor:pointer;
    }
    a {
      color:${props => props.theme.linkText}
    }
`;

const theme = {
  white: '#fff',
  dark: '#282c34',
  linkText: '#2f5e95'
};

const App = ({ user, history }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header user={user} history={history} />
        <Content>
          <Switch>
            <Route exact path="/" render={props => <LandingPage {...props} />} />
            <Route path="/register" render={props => <RegisterPage {...props} />} />
            <Route path="/login" render={props => <LoginPage {...props} />} />
            <PrivateRoute path="/my_profile" component={MyProfilePage} />
            <Route path="/dashboard" render={props => <DashboardPage {...props} />} />
            <Route path="/create-profile" render={props => <CreateProfile {...props} />} />
          </Switch>
        </Content>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    area_code: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

App.defaultProps = {
  user: {}
};

export default withRouter(connect(mapStateToProps, {})(App));
