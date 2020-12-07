/* eslint-disable no-console */
import React from 'react';

import { Container } from './styles';
import { useCep } from '~/hooks/CepFinder';

function ItemDetail() {
  const { item } = useCep();

  return (
    <Container>
      {item && (
        <>
          <h3>Informações Complementares</h3>
          <span>
            Cidade: {item.localidade}, {item.uf}
          </span>
          <span>Cep: {item.cep}</span>
          {item.bairro && <span>Bairro: {item.bairro}</span>}
          {item.logradouro && <span>Logradouro: {item.logradouro}</span>}
          {item.complemento && <span>Complemento: {item.complemento}</span>}
          <span>DDD: {item.ddd}</span>
        </>
      )}
    </Container>
  );
}

export default ItemDetail;
