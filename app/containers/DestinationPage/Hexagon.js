import React from 'react';
import styled from 'styled-components';
import { string, array } from 'prop-types';

const HexSmall = styled.div`
  position: ${props => props.position};
  width: 100px;
  height: 57.74px;
  background-color: #64c7cc;
  margin: 28.87px 0;
  transform: rotate(90deg);
  cursor: pointer;
  top: ${props => props.coordinate[0]}px;
  left: ${props => props.coordinate[1]}px;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
  }
  &:before,
  :after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 28.87px solid #64c7cc;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 28.87px solid #64c7cc;
  }
`;

export default function Hexagon({
  color = '#ccc',
  position = 'absolute',
  coordinate = [0, 0],
}) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <HexSmall position={position} color={color} coordinate={coordinate} />
    </div>
  );
}

Hexagon.propTypes = {
  color: string,
  position: string,
  coordinate: array,
};
