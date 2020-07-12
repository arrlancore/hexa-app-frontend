import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { array } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_POSITION } from './constants';
import { setCloseSnackbar } from './actions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackbarProvider({ position }) {
  const classes = useStyles();
  const data = useSelector(state => state.snackbarMessage) || {};
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [vertical, horizontal] = position;

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setCloseSnackbar());
    setOpen(false);
  };

  React.useEffect(() => {
    if (data && data.message) {
      setOpen(true);
    }
  }, [data]);

  return (
    <>
      <div className={classes.root}>
        <Snackbar
          open={open}
          autoHideDuration={data.duration}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
        >
          <Alert onClose={handleClose} severity={data.type}>
            {data.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

SnackbarProvider.propTypes = {
  position: array,
};

SnackbarProvider.defaultProps = {
  position: DEFAULT_POSITION,
};
