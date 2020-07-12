/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { bool, func, object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCluster, editCluster, createCluster } from './actions';
import usePrevious from '../../utils/usePrevious';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog({ open, handleClose, dataEdit }) {
  const classes = useStyles();
  const form = useForm();
  const dispatch = useDispatch();
  const auth = useSelector(e => e.auth);
  const cluster = useSelector(e => e.cluster);

  const prevLoading = usePrevious(cluster.loading);
  React.useEffect(() => {
    if (prevLoading && !cluster.loading) {
      handleClose(true);
    }
  }, [cluster.loading, prevLoading]);

  const { handleSubmit, errors, register } = form;

  const onSubmit = data => {
    if (dataEdit) {
      dispatch(editCluster(auth.token, dataEdit._id, data));
    } else {
      dispatch(createCluster(auth.token, data));
    }
  };

  const onDelete = idCluster => {
    dispatch(deleteCluster(auth.token, idCluster));
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={() => handleClose()}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => handleClose()}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {dataEdit ? 'Edit' : 'Create'}
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                autoComplete="name"
                name="name"
                fullWidth
                id="name"
                defaultValue={dataEdit?.name}
                label="Place Name"
                autoFocus
                inputRef={register({
                  required: 'Place Name is required',
                })}
                error={!!errors.name || false}
                helperText={errors.name?.message || errors.name?.type || ''}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <TextField
                variant="outlined"
                autoComplete="description"
                name="description"
                id="description"
                defaultValue={dataEdit?.description}
                fullWidth
                inputRef={register()}
                label="Description"
                multiline
                error={!!errors.description || false}
                helperText={
                  errors.description?.message || errors.description?.type || ''
                }
              />
            </ListItem>
            <Divider />
            <ListItem>
              <TextField
                variant="outlined"
                autoComplete="imageUrl"
                name="imageUrl"
                id="imageUrl"
                fullWidth
                defaultValue={dataEdit?.imageUrl}
                inputRef={register()}
                label="Image URL"
                type="imageUrl"
                error={!!errors.imageUrl || false}
                helperText={
                  errors.imageUrl?.message || errors.imageUrl?.type || ''
                }
              />
            </ListItem>
            <Divider />
            <ListItem>
              <Grid container justify="space-between">
                <Button size="large" color="primary" type="submit">
                  save
                </Button>
                {dataEdit && (
                  <Button
                    // eslint-disable-next-line no-underscore-dangle
                    onClick={() => onDelete(dataEdit._id)}
                    size="large"
                    color="secondary"
                  >
                    delete
                  </Button>
                )}
              </Grid>
            </ListItem>
          </List>
        </form>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  open: bool,
  handleClose: func,
  dataEdit: object,
};
