import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import { HOME_PAGE } from '../containers/App/constants';
import { userSignOut } from '../containers/Authentication/actions';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(userSignOut());

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link to={HOME_PAGE} underline="none">
          <TripOriginIcon fontSize="large" />
        </Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        <Button onClick={handleSignOut} variant="outlined" size="small">
          Sign out
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  //   sections: PropTypes.array
  title: PropTypes.string,
};
