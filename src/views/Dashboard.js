import React from 'react';
import HeroFull from '../components/sections/HeroFull02';

class Dashboard extends React.Component {

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
        <HeroFull className="illustration-section-01" />

      </React.Fragment>
    );
  }
}


export default Dashboard;