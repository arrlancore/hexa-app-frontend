import React from 'react';
import { useSelector } from 'react-redux';
import { node, array } from 'prop-types';

export default function Authorized({ children, roles = [] }) {
  const { data } = useSelector(state => state.auth);
  return roles.includes(data.role) ? children : <section />;
}

Authorized.propTypes = {
  children: node,
  roles: array,
};
