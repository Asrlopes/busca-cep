import React, { useRef, useState } from 'react';

import { FaSearch, FaPaperPlane } from 'react-icons/fa';

// import { FormHandles } from '@unform/core';

// import * as Yup from 'yup';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { Container, Body, SearchBox, Row, FormStyled } from './styles';

function Main() {
  const formRef = useRef(null);

  const [inputType, setInputType] = useState('CEP');

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

              <button type="submit">
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
