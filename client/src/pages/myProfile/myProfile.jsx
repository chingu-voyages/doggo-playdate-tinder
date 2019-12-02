import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledMyProfilePage from './myProfile.styles';
import StyledContent from '../../components/styled/Content';

// import { getProfile } from '../../redux/actions';

const MyProfile = ({ user }) => {
  return (
    <StyledMyProfilePage.Container>
      <StyledContent>
        <h1>My Profile</h1>
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Area Code: {user.area_code}</li>
          <li>Image: {user.image}</li>
        </ul>
      </StyledContent>
    </StyledMyProfilePage.Container>
  );
};

MyProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    area_code: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

MyProfile.defaultProps = {
  user: {}
};

const mapStateToProps = state => ({
  user: state.user.user
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProfile: () => {
//       dispatch(getProfile());
//     }
//   };
// };

export default connect(mapStateToProps, {})(MyProfile);
