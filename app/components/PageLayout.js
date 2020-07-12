import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { node, bool } from 'prop-types';
import config from 'config';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function PageLayout({ children, pageLoading = false }) {
  const classes = useStyles();
  return (
    <div>
      <Header title={config.app.appName} />
      <section>{children}</section>
      <Footer />
      <Backdrop className={classes.backdrop} open={pageLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

PageLayout.propTypes = { children: node, pageLoading: bool };
