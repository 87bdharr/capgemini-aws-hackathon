import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';

Amplify.configure(awsconfig);


const PrivateRoute = () => {
  return (
    <div>
      <h1> You have to be signed in to see this </h1>
    </div>
  )
}

const SignedInView = withAuthenticator(PrivateRoute)

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/dashboard" component={Dashboard} layout={LayoutDefault} />
            <AppRoute exact path="/about-us" component={AboutUs} layout={LayoutDefault} />
            <AppRoute exact path="/FAQs" component={FAQ} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />
            <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
            <AppRoute exact path="/private" component={SignedInView} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);