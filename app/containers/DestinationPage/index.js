/* eslint-disable no-underscore-dangle */
/*
 * DestinationPage
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
import TripOriginIcon from '@material-ui/icons/TripOrigin';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { object } from 'prop-types';
import PageLayout from '../../components/PageLayout';
// import Authorized from '../Authentication/Authorized';
// import { ROLE_ADMIN } from '../App/constants';
import { getDestinationCluster } from './actions';
import FormDialog from './FormDialog';
// import { DEFAULT_IMAGE } from './constants';
// import Hexagon from './Hexagon';
import { Cluster } from './utils';

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
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DestinationPage({ match }) {
  const clusterId = match.params.id;
  const classes = useStyles();
  // const form = useForm();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const destinationCluster = useSelector(e => e.destinationCluster);
  const destination = useSelector(e => e.destination);

  const [cluster, setCluster] = React.useState(null);

  const [openDialog, setOpenDialog] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState(undefined);

  // get list data
  React.useEffect(() => {
    dispatch(getDestinationCluster(auth.token, clusterId));
  }, []);

  React.useEffect(() => {
    if (destinationCluster.data) {
      setCluster(new Cluster(destinationCluster.data?.nodes));
    }
  }, [destinationCluster.data]);

  const handleCloseDialog = loadList => {
    setOpenDialog(false);
    setDataEdit(undefined);
    if (loadList) {
      // dispatch(getListCluster(auth.token));
    }
  };

  // const handleCreate = () => {
  //   setOpenDialog(true);
  //   setDataEdit(undefined);
  // };

  // const handleEdit = item => {
  //   setDataEdit(item);
  //   setOpenDialog(true);
  // };

  const nodes = cluster?.get() || {};
  const listNodes = Object.values(nodes);

  const handleAddNode = () => {
    cluster.add(
      {
        name: '5f0a6d455db72b53fc0cfc8pp',
        destinationName: 'Carefour',
        border: 5,
      },
      '5f0a6d455db72b53fc0cfc86',
    );
  };
  // load grid 10 x 10
  // place rootNode on the center

  return (
    <PageLayout pageLoading={destinationCluster.loading || destination.loading}>
      <FormDialog
        open={openDialog}
        dataEdit={dataEdit}
        handleClose={handleCloseDialog}
      />
      <Helmet>
        <title>{`Manage Destination - ${config.app.appUrl}`}</title>
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
                {`Manage Destination: ${destinationCluster.data?.cluster.name ||
                  ''}`}
              </Typography>
            </section>
            <div
              style={{
                position: 'relative',
                width: '100%',
                overflow: 'auto',
                minHeight: 500,
              }}
            >
              {/* {matrixs.map(items => {
                return items.map(item => <Hexagon coordinate={item} />);
              })} */}
              <Grid container>
                <Grid xs={6} item>
                  <List className={classes.list}>
                    {listNodes.map(item => (
                      <ListItem
                        key={item._id}
                        button
                        style={{ background: '#f7f7f7' }}
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <TripOriginIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.destinationName}
                          secondary={item.type}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid xs={6} item>
                  Child
                  <Button onClick={handleAddNode}>Add Node</Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Paper>
      </Container>
    </PageLayout>
  );
}

DestinationPage.propTypes = {
  match: object,
};
