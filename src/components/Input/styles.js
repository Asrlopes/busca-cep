import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #fff;
  border-radius: 0.625rem;
  padding: 1rem;
  width: 40%;
  margin: 0 0.3125rem;

  border: 0.125rem solid #232129;
  color: #666360;

  display: flex;
  align-items: center;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem #000000;

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

  span {
    color: red;
    margin: 0 0 0.125 0rem;
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
