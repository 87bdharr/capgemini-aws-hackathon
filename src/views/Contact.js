import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import GenericSection from '../components/sections/GenericSection';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';

class Contact extends React.Component {

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

    const genericSection04Header = {
      title: 'Have a question in mind?'
    }

    return (
      <React.Fragment>

        <GenericSection topDivider className="illustration-section-05">
          <div className="container-xs">
            <h2 className="mt-0">Lorem ipsum is placeholder text commonly used in the graphic.</h2>
            <p>
              Lorem ipsum dolor sit amet, <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <figure>
              <Image
                className="image-larger"
                src={require('./../assets/images/image-placeholder.png')}
                alt="Placeholder"
                width={712}
                height={400} />
              <figcaption className="text-color-low">A super-nice image <span role="img" aria-label="mile">😀</span></figcaption>
            </figure>
            <h4>Flexibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
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

export default Contact;