import React from 'react';
import { FaGlobeAmericas, FaCopyright } from 'react-icons/fa';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <FaGlobeAmericas size={30} />
          <h1>Buscador de Cep</h1>
        </nav>
        <span>
          Feito por: Amorésio de Souza <FaCopyright size={10} />
        </span>
      </Content>
    </Container>
  );
}

export default Header;
