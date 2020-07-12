import React from 'react';
import ButtonMaterialUI from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { bool, node, string } from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '20px',
  },
}));

export default function Button({
  loading,
  size = 'large',
  children,
  startIcon = null,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <ButtonMaterialUI
      classes={{ root: classes.root }}
      style={{ color: props.color === 'primary' ? 'white' : 'inherit' }}
      size={size}
      {...props}
      startIcon={
        loading ? (
          <CircularProgress size={24} style={{ marginRight: 14 }} />
        ) : (
          startIcon
        )
      }
    >
      {children}
    </ButtonMaterialUI>
  );
}

Button.propTypes = {
  loading: bool,
  size: string,
  children: node,
  startIcon: node,
  color: string,
};
