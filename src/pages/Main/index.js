import React, { useRef, useState } from 'react';

import { FaSearch, FaPaperPlane } from 'react-icons/fa';

// import { FormHandles } from '@unform/core';

// import * as Yup from 'yup';

import { useToast } from '~/hooks/Toast';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { Container, Body, SearchBox, Row, FormStyled } from './styles';

function Main() {
  const formRef = useRef(null);
  const { addToast } = useToast();

  const [inputType, setInputType] = useState('CEP');

  function teste() {
    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
    });
  }

  return (
    <Container>
      <Header />
      <Body>
        <SearchBox>
          <Row>
            <FormStyled ref={formRef}>
              {inputType === 'CEP' ? (
                <Input
                  name="CEP"
                  Icon={FaSearch}
                  placeholder="Pesquisar por Cep"
                />
              ) : (
                <Input
                  name="UF"
                  Icon={FaSearch}
                  placeholder="Pesquisar por UF/Cidade"
                />
              )}

              <button type="button" onClick={() => teste()}>
                <FaPaperPlane size={20} />
              </button>

              <select onChange={(event) => setInputType(event.target.value)}>
                <option value="CEP">CEP</option>
                <option value="UF">UF/Cidade</option>
              </select>
            </FormStyled>
          </Row>
        </SearchBox>
      </Body>
    </Container>
  );
}

export default Main;
