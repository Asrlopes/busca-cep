import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  padding: 0 30px;
  background-color: #7d7a85;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  height: 4rem;
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
