/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/CustomButton';
import { userSignIn } from '../Authentication/actions';

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
  },
  formLogin: {
    height: '100%',
    padding: theme.spacing(4),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const form = useForm();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const { handleSubmit, errors, register } = form;

  const onSubmit = data => {
    dispatch(userSignIn(data));
  };

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper elevation={3} style={{ marginTop: 20 }}>
          <Grid container justify="center" style={{ minHeight: '90vh' }}>
            <Grid item xs={12} sm={6}>
              <Grid
                container
                alignItems="center"
                className={classes.rightBanner}
              >
                <section>
                  <Typography
                    style={{ color: '#fff' }}
                    variant="h4"
                    component="h1"
                    gutterBottom
                  >
                    {`With our online claims centre, it's quick and easy to lodge a claim`}
                  </Typography>
                  <Typography
                    style={{ color: '#fff' }}
                    variant="body1"
                    gutterBottom
                  >
                    {`Login to get started, to check up on the progress of existing claims.`}
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
                  Buget & Hex
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
