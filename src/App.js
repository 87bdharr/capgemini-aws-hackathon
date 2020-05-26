import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Contact from './views/Contact';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';

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
            <AppRoute exact path="/contact" component={Contact} layout={LayoutDefault} />
            <AppRoute exact path="/about-us" component={AboutUs} layout={LayoutDefault} />
            <AppRoute exact path="/FAQs" component={FAQ} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />
            <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);