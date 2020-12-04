import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

function Tooltip({ title, className, children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Tooltip;
