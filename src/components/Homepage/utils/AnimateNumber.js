import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const AnimateNumber = ({
  number, start, duration, className, style,
}) => {
  const [frame, setFrame] = useState(0);
  const component = useRef(null);

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setFrame(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const runAnimation = () => {
      const box = component.current.getBoundingClientRect();

      if (box.top < window.innerHeight && box.bottom >= 0) {
        animateValue(start, number, duration);
        window.removeEventListener('scroll', runAnimation);
      }
    };

    const box = component.current.getBoundingClientRect();

    if (box.top < window.innerHeight && box.bottom >= 0) {
      animateValue(start, number, duration);
    } else {
      window.addEventListener('scroll', runAnimation);
    }

    return () => window.removeEventListener('scroll', runAnimation);
  }, []);

  return (
    <span ref={component} className={className} style={style}>
      {frame}
    </span>
  );
};

AnimateNumber.propTypes = {
  number: PropTypes.number.isRequired,
  start: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.objectOf(propTypes.string),
};

AnimateNumber.defaultProps = {
  start: 0,
  duration: 3000,
  className: undefined,
  style: undefined,
};

export default AnimateNumber;
