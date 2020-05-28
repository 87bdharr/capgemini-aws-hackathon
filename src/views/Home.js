import React from 'react';
//import landing page components
import HeroFull from '../components/sections/HeroFull';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/TestimonialCarousel';
//input form control components
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from '../components/sections/GenericSection'
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';

class Home extends React.Component {
  render() {

      const FormControlHeader = {
        title: 'Have a question in mind?'
      }

    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <FeaturesSplit invertMobile topDivider imageFill />
        <Testimonial className="illustration-section-07" />
        
        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={FormControlHeader} className="center-content" />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary">Send email</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="error"
                  hint="Something is wrong.">
                  <Button color="primary">Send email</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="success"
                  hint="You've done it.">
                  <Button color="primary">Send email</Button>
                </Input>
              </div>
            </form>
          </div>
        </GenericSection>

      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default Home;