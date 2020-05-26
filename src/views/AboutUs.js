import React from 'react';
import Team from '../components/sections/Team';

class AboutUs extends React.Component {

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
        <Team className="illustration-section-03" />
      </React.Fragment>
    );
  }
}


export default AboutUs;