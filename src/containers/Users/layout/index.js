import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';

const Layout = ({ children, title }) => (
  <div className="layout">
    <h1>{title}</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

export default Layout;
