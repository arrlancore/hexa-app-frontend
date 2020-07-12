/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Avatar from '@material-ui/core/Avatar';
import Button from 'components/CustomButton';
import config from 'config';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from 'utils/usePrevious';
import { object } from 'prop-types';
import LoginBanner from 'images/login-banner.jpg';
import LoginBannerSmall from 'images/login-banner-small.jpg';
import { userSignIn } from '../Authentication/actions';
import { HOME_PAGE, LOGIN_PAGE } from '../App/constants';
import ProgressiveBackgroundImage from '../../components/ProgressiveBackgroundImage';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rightBanner: {
    height: '100%',
    background: theme.palette.primary.main,
    padding: theme.spacing(4),
    position: 'relative',
  },
  formLogin: {
    height: '100%',
    padding: theme.spacing(4),
  },
  imageBanner: {
    backgroundPosition: '50%',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
}));

export default function LoginPage({ history }) {
  const classes = useStyles();
  const form = useForm();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const { handleSubmit, errors, register } = form;

  const onSubmit = data => {
    dispatch(userSignIn(data));
  };

  // side effect for success login
  const prevData = usePrevious(auth.data);
  React.useEffect(() => {
    const isLoginPage = history.location.pathname === LOGIN_PAGE;
    if (auth.token && auth.isAuth && isLoginPage && auth.data !== prevData) {
      history.push(HOME_PAGE);
    }
  }, [auth.data, prevData]);

  return (
    <>
      <Helmet>
        <title>{`Signin - ${config.app.appName}`}</title>
        <meta
          name="description"
          content="Plan your next trip with budget hack"
        />
      </Helmet>
      <Container component="main" maxWidth="lg">
        <Paper elevation={3} style={{ marginTop: 20 }}>
          <Grid container justify="center" style={{ minHeight: '90vh' }}>
            <Grid item xs={12} sm={6} style={{ position: 'relative' }}>
              <Grid
                container
                alignItems="center"
                className={classes.rightBanner}
              >
                <ProgressiveBackgroundImage
                  className={classes.imageBanner}
                  src={LoginBanner}
                  placeholder={LoginBannerSmall}
                  transitionTime={0.3}
                />
                <section>
                  <Typography
                    style={{ color: '#fff' }}
                    variant="h4"
                    component="h1"
                    gutterBottom
                  >
                    {`A unique travel guide with real travel prices from travelers like you.`}
                  </Typography>
                  <Typography
                    style={{ color: '#fff' }}
                    variant="body1"
                    gutterBottom
                  >
                    {`Login to get started & enjoy your hack`}
                  </Typography>
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.formLogin}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <TripOriginIcon />
                </Avatar>
                <Typography color="textSecondary" component="h1" variant="h5">
                  {config.app.appName}
                </Typography>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.form}
                  noValidate
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        inputRef={register({
                          required: 'Email is required',
                        })}
                        type="email"
                        error={!!errors.email || false}
                        helperText={
                          errors.email?.message || errors.email?.type || ''
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        inputRef={register({
                          required: 'Password is required',
                        })}
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        error={!!errors.password || false}
                        helperText={
                          errors.password?.message ||
                          errors.password?.type ||
                          ''
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    loading={auth.loading}
                  >
                    LOGIN
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

LoginPage.propTypes = {
  history: object,
};
