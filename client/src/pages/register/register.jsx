import React, { useState, useEffect } from 'react';
import StyledForm from '../../components/styled/Form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';
import StyledRegisterPage from './register.styles';

const RegisterPage = ({ registerUser, user, error, history }) => {
  const [formState, updateFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    registerUser(formState);
  };

  useEffect(() => {
    // Redirects on successful registration.
    if (user.username) {
      history.push('/dashboard');
    }
  });
  return (
    <StyledRegisterPage.Container>
      <StyledForm
        role="form"
        method="post"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Register an account</h1>
        <div>
          <label>
            {/* <p>First Name</p> */}
            <input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </label>
          <label>
            {/* <p>Last Name</p> */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          {/* <p>Last Name</p> */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label>
          {/* <p>Email</p> */}
          <input
            type="text"
            autoComplete="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>

        <label>
          {/* <p>Password</p> */}
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button className="SubmitButton" type="submit">
          Submit
        </button>
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
      </StyledForm>
    </StyledRegisterPage.Container>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    error: state.user.authErrors
  };
};

const mapDispatchToProps = dispatch => ({
  registerUser: formState => dispatch(registerUser(formState))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
