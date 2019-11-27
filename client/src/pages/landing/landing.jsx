import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>This will be a landing page.</h1>
      <h2>
        <Link to="/login">Login!</Link>
      </h2>
    </div>
  );
};

export default LandingPage;
