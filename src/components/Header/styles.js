import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 1.875rem;
  background-color: #7d7a85;
  box-shadow: 0rem 0.125rem 0.3125rem 0rem rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  height: 4rem;
  max-width: 56.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;
    }
  }
`;
