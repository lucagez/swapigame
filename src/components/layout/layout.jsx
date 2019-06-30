import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, is }) => (
  <>
    <Header siteTitle="SW" is={is} />
    <div>
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  is: PropTypes.string,
};

Layout.defaultProps = {
  is: '',
};

export default Layout;
