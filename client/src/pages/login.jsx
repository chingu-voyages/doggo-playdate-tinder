import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../redux/actions';
import StyledForm from '../components/styled/Form';

const LoginPage = ({ user, isLoggingInUser, authErrors, loginUser }) => {
  const [formState, updateFormState] = useState({ email: '', password: '' });

  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    loginUser({ email: formState.email, password: formState.password });
  };

  return (
    <div>
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
          <p>Email</p>
          <input
            type="text"
            autoComplete="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="login-form">
          <p>Password</p>
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button className="SubmitButton" type="submit">
          Submit
        </button>
        <Link to="/register">
          <p>Don&#39;t have an account?</p>
        </Link>
      </StyledForm>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  isLoggingInUser: state.isLoggingInUser,
  authErrors: state.authErrors
});

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
