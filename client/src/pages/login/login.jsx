import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../../redux/actions';
import StyledForm from '../../components/styled/Form';
import StyledLoginPage from './login.styles';

const LoginPage = ({ login, user, error, loading, history }) => {
  const [formState, updateFormState] = useState({ username: '', password: '' });

  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    login(formState);
  };

  useEffect(() => {
    // Redirects if user is already logged in.
    if (user.username) {
      history.push('/dashboard');
    }
  });

  return (
    <StyledLoginPage.Container>
      <StyledForm
        id="login-form"
        role="form"
        method="post"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Log into your account</h1>
        <label htmlFor="login-form">
          <input
            type="text"
            autoComplete="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>

        <label htmlFor="login-form">
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <h3 style={{ color: 'red' }}>{error}</h3>
        <button className="SubmitButton" type="submit">
          Submit
        </button>
        <Link to="/register">
          <p>Don&#39;t have an account?</p>
        </Link>
      </StyledForm>
    </StyledLoginPage.Container>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.isLoggingInUser,
  error: state.user.authErrors
});

const mapDispatchToProps = dispatch => {
  return {
    login: formData => {
      dispatch(loginUser(formData));
    }
  };
};

// The linter also wants everything that the component receives and uses from props to be validated with prop-types:
LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
