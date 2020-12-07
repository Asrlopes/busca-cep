import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0.6;
  flex-direction: column;
  max-height: 60vh;

  padding: 0.9375rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  width: 80%;
  background-color: #fff;
  padding: 0 0.9375rem;
  min-height: 3.5625rem;
  border-radius: 0.625rem;
  transition: transform 0.5s;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem #000000;

  &:hover {
    transform: translateX(0.625rem);
    background-color: ${shade(0.2, '#fff')};
  }

  & + div {
    margin-top: 1rem;
  }

  span {
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
`;
