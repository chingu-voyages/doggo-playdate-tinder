import React, { useState } from 'react';
import StyledForm from '../components/styled/Form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formState, updateFormState] = useState({ email: '', password: '' });

  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <StyledForm
        role="form"
        method="post"
        onSubmit={e => {
          e.preventDefault();
          console.log('submit');
        }}
      >
        <h1>Log into your account</h1>
        <label>
          <p>Email</p>
          <input
            type="text"
            autoComplete="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>

        <label>
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
          <p>Don't have an account?</p>
        </Link>
      </StyledForm>
    </div>
  );
};

export default LoginPage;
