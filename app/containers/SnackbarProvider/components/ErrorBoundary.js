import React from 'react';
import { connect } from 'react-redux';
import { node, func } from 'prop-types';
import { SET_OPEN_SNACKBAR } from '../constants';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    //   You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    this.props.dispatch({
      type: SET_OPEN_SNACKBAR,
      data: { message: 'Catching an error, please check your console' },
    });
    // eslint-disable-next-line no-console
    console.error(`[ERROR BOUNDARY][${this.state.hasError}]:`, error.message);
  }

  render() {
    // if (this.state.hasError) {
    //   // You can render any custom fallback UI
    //   return <h1>Something went wrong.</h1>;
    // }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: node,
  dispatch: func,
};

export default connect(null)(ErrorBoundary);
