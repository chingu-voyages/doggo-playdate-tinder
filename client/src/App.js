import React from 'react';
import { reset as resetStyles } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/styled/Content';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

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
    }
    button, link {
      cursor:pointer;
    }
`;

const theme = {
  white: '#fff',
  dark: '#282c34',
  linkText: '#282c34'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route exact path="/login" render={() => <LoginPage />} />
            <Route exact path="/register" render={() => <RegisterPage />} />
          </Switch>
        </Content>
      </div>
    </ThemeProvider>
  );
};

export default App;
