/* eslint-disable no-underscore-dangle */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import config from 'config';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CustomButton from 'components/CustomButton';
import AddIcon from '@material-ui/icons/Add';

import { useDispatch, useSelector } from 'react-redux';
import { object } from 'prop-types';
import PageLayout from '../../components/PageLayout';
import Authorized from '../Authentication/Authorized';
import { ROLE_ADMIN } from '../App/constants';
import { getListCluster } from './actions';
import FormDialog from './FormDialog';
import { DEFAULT_IMAGE } from './constants';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    margin: theme.spacing(4, 0),
    minHeight: '70vh',
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
  card: {
    marginBottom: 32,
  },
}));

export default function HomePage({ history }) {
  const classes = useStyles();
  // const form = useForm();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const listCluster = useSelector(state => state.listCluster);
  const cluster = useSelector(state => state.cluster);

  const [openDialog, setOpenDialog] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState(undefined);

  // get list data
  React.useEffect(() => {
    dispatch(getListCluster(auth.token));
  }, []);

  const handleCloseDialog = loadList => {
    setOpenDialog(false);
    setDataEdit(undefined);
    if (loadList) {
      dispatch(getListCluster(auth.token));
    }
  };

  const handleCreate = () => {
    setOpenDialog(true);
    setDataEdit(undefined);
  };

  const handleEdit = item => {
    setDataEdit(item);
    setOpenDialog(true);
  };

  return (
    <PageLayout pageLoading={listCluster.loading || cluster.loading}>
      <FormDialog
        open={openDialog}
        dataEdit={dataEdit}
        handleClose={handleCloseDialog}
      />
      <Helmet>
        <title>{`Home - ${config.app.appUrl}`}</title>
        <meta
          name="description"
          content="Plan your next trip with budget hack"
        />
      </Helmet>
      <Container component="main">
        <Paper elevation={0} className={classes.paper}>
          <Grid container justify="center" direction="column">
            <section
              style={{
                marginBottom: 24,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                style={{ fontWeight: 'bold' }}
                gutterBottom
                variant="h4"
                component="h1"
              >
                All Places
              </Typography>
              <Authorized roles={[ROLE_ADMIN]}>
                <CustomButton
                  startIcon={<AddIcon />}
                  size="medium"
                  variant="contained"
                  color="primary"
                  onClick={handleCreate}
                >
                  New
                </CustomButton>
              </Authorized>
            </section>
            {listCluster.data?.map(item => (
              <Card className={classes.card} key={item._id}>
                <CardActionArea
                  onClick={() =>
                    history.push(
                      auth.data?.role === 'admin'
                        ? `/destination/${item._id}`
                        : `/trip-plan/${item._id}`,
                    )
                  }
                >
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={item.imageUrl || DEFAULT_IMAGE}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Authorized roles={[ROLE_ADMIN]}>
                  <CardActions>
                    <Button
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => handleEdit(item)}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Authorized>
              </Card>
            ))}
          </Grid>
        </Paper>
      </Container>
    </PageLayout>
  );
}

HomePage.propTypes = { history: object };
