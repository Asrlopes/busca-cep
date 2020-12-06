import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)`
  width: 22.5rem;

  position: relative;
  padding: 1rem 1.875rem 1rem 1rem;
  border-radius: 0.625rem;
  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 0.5rem;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0.25rem 0.75rem 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 0.25rem;
      font-size: 0.75rem;
      opacity: 0.8;
      line-height: 1.25rem;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1.1875rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
