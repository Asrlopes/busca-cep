import React from 'react';

import Header from '~/components/Header';

import { Container, Body } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <Body>
        <input type="text" />
      </Body>
    </Container>
  );
}

export default Main;
