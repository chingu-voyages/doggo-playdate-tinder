import React, { useState } from 'react';
// import axios from 'axios';
import StyledForm from '../components/styled/Form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formState, updateFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    updateFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log('registerUser action from redux should fire here,');
    console.table(formState);
  };
  return (
    <div>
      <StyledForm
        role="form"
        method="post"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Register an account</h1>
        <label>
          <p>First Name</p>
          <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
        </label>
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
    </div>
  );
};

export default RegisterPage;
