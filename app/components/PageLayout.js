import React from 'react';
import { node, bool } from 'prop-types';
import config from 'config';
import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ children, pageLoading }) {
  console.log('PageLayout -> pageLoading', pageLoading);
  return (
    <div>
      <Header title={config.app.appName} />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

PageLayout.propTypes = { children: node, pageLoading: bool };
