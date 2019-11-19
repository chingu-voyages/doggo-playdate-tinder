import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../redux/actions';
import StyledForm from '../components/styled/Form';

const LoginPage = props => {
  const [formState, updateFormState] = useState({ email: '', password: '' });

  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    props.attemptLogin({ email: formState.email, password: formState.password });
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

//  Initially, I tried to write mapDispatchToProps like so:
//    const mapDispatchToProps = { loginUser };
//  But the linter wouldn't let this pass because loginUser is 'import'ed at the top of the page, and also passed down as props through the component. So I had to rename this function as attemptLogin in order to get this page to pass the linter.

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: formData => {
      dispatch(loginUser(formData));
    }
  };
};

// The linter also wants everything that the component receives and uses from props to be validated with prop-types:
LoginPage.propTypes = {
  attemptLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
