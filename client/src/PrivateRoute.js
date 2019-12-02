import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    area_code: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  component: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

PrivateRoute.defaultProps = {
  user: {}
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, {})(PrivateRoute);
