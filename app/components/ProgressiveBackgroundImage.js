import React from 'react';
import styled from 'styled-components';
import { string, number, func } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';

const DivImageProgressive = styled.div`
  background-image: ${props =>
    props.placeholder ? `url(${props.placeholder})` : 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  transition: ${props => `all ${props.transitionTime}s ease-out`};
  height: ${props => props.height};
  opacity: ${props => props.opacity};
  display: block;
  filter: blur(8px);
`;

export default function ProgressiveBackgroundImage({
  src,
  placeholder,
  transitionTime = 2.5,
  height = '300px',
  onLoaded = () => {},
  ...rest
}) {
  const elementId = 'react-progressive-bg-image';
  const [loaded, setLoaded] = React.useState(false);
  const [styles, setStyles] = React.useState({});

  function loadImage(srcImage) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = srcImage;
      image.onload = () => {
        setLoaded(true);
        setStyles({
          backgroundImage: `url(${src})`,
          filter: 'none',
        });
        onLoaded();
        resolve(src);
      };
      image.onerror = err => reject(err);
    });
  }

  React.useEffect(() => {
    const handleLoadSrcImage = async () => {
      try {
        await loadImage(src);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.info(error);
      }
    };
    handleLoadSrcImage();
  }, []); // eslint-disable-line

  const showSkeleton = !loaded && !placeholder;

  return (
    <>
      {showSkeleton && (
        <Skeleton animation="wave" variant="rect" height={height} {...rest} />
      )}
      <DivImageProgressive
        id={elementId}
        placeholder={placeholder}
        transitionTime={transitionTime}
        height={height}
        opacity={!loaded ? 0 : 1}
        style={{ ...styles }}
        {...rest}
      />
    </>
  );
}

ProgressiveBackgroundImage.propTypes = {
  src: string.isRequired,
  placeholder: string,
  transitionTime: number,
  height: string,
  onLoaded: func,
};
