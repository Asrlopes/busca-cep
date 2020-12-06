import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #fff;
  border-radius: 0.625rem;
  padding: 1rem;
  width: 55%;

  border: 0.125rem solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #7d7a85;
      border-color: #7d7a85;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #7d7a85;
      border-color: #7d7a85;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #232129;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Tip = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #232129;
    color: #fff;

    &::before {
      border-color: #232129 transparent;
    }
  }
`;
export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
