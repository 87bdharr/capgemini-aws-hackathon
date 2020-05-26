import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/TestimonialCarousel';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <FeaturesSplit invertMobile topDivider imageFill />
        <Testimonial className="illustration-section-07" />
      </React.Fragment>
    );
  }
}

export default Home;