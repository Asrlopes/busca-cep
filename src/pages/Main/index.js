/* eslint-disable no-console */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import * as Yup from 'yup';
import { FaSearch, FaPaperPlane } from 'react-icons/fa';

// import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

import getValidationErros from '~/utils/getValidationErrors';

// import { FormHandles } from '@unform/core';

// import { useToast } from '~/hooks/Toast';
import { useCep } from '~/hooks/CepFinder';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { Container, Body, SearchBox, Row, FormStyled } from './styles';

function Main() {
  const formRef = useRef(null);
  // const { addToast } = useToast();
  const { FindCepByCode, loading, data } = useCep();

  const [inputType, setInputType] = useState('CEP');

  useEffect(() => {
    console.log(data);
  }, []);

  const handleSubmit = useCallback(async (FormData) => {
    const cep = FormData.cep.replace(/-/g, '');

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cep: Yup.string().required().length(8, 'O Cep deve conter 8 dígitos.'),
      });

      await schema.validate(
        { cep },
        {
          abortEarly: false,
        },
      );

      await FindCepByCode({
        code: cep,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);
      }
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        <SearchBox>
          <Row>
            <FormStyled ref={formRef} onSubmit={handleSubmit}>
              {inputType === 'CEP' ? (
                <Input
                  name="cep"
                  Icon={FaSearch}
                  placeholder="Pesquisar por Cep"
                  mask="99999-999"
                />
              ) : (
                <Input
                  name="uf"
                  Icon={FaSearch}
                  placeholder="Pesquisar por UF/Cidade"
                />
              )}

              <button type="submit">
                {loading ? (
                  <ClipLoader
                    // css={override}
                    size={20}
                    color="#FFF"
                    loading={loading}
                  />
                ) : (
                  <FaPaperPlane size={20} />
                )}
              </button>

              <select onChange={(event) => setInputType(event.target.value)}>
                <option value="CEP">CEP</option>
                <option value="UF">UF/Cidade</option>
              </select>
            </FormStyled>
            {/* {data && data?.map((items) => <li>{items.cep}</li>)} */}
          </Row>
        </SearchBox>
      </Body>
    </Container>
  );
}

export default Main;
