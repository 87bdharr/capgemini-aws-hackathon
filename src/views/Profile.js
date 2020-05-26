import React from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
import GenericSection from '../components/sections/GenericSection';
// import some required elements

class Profile extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {

    return (
      <React.Fragment>

        <GenericSection topDivider className="illustration-section-04">
          <div className="container-xs">
            <h2 className="mt-0">Your Profile</h2>
            <p>
              Lorem ipsum dolor sit amet, <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <FeaturesTiles className="illustration-section-02" />

          </div>
        </GenericSection>

      </React.Fragment>
    );
  }
}


export default Profile;