import React from 'react';
import PropTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';

import './sky.css';

/**
 * The `Sky` component displays an arbitrary number of
 * divs that follows at a distance the mose position.
 * In this case every div is displaying a Star Wars starship.
 *
 * @param {node} children - The children enclosed
 * in the `Sky` component
 */
const Sky = ({ children }) => {
  const trans = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`;

  const [springs, set] = useTrail(20, () => ({
    xy: [100, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140,
    },
  }));


  return (
    <>
      <div
        className="Sky"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
        }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}
      >
        {springs.map((prop, id) => (
          <animated.div
            key={id}
            className="follower"
            style={{
              transform: prop.xy.interpolate(trans),
            }}
          />
        ))}
      </div>
      {children}
    </>
  );
};

Sky.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sky;
