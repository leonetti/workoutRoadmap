import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

const Home = () => <p>Account Home</p>;
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Account = () => (
  <>
    <nav>
      <Link to="/account">Home</Link>
      <Link to="/account/settings">Settings</Link>
      <Link to="/account/billing">Billing</Link>
    </nav>
    <Router>
      <Home path="/account" />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>
  </>
);
Account.propTypes = {
};
export default Account;
