/* eslint-disable no-console */
import React, { useRef, useState, useCallback } from 'react';
import * as Yup from 'yup';
import { FaSearch, FaPaperPlane, FaRoad } from 'react-icons/fa';

// import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

import getValidationErros from '~/utils/getValidationErrors';

// import { FormHandles } from '@unform/core';

// import { useToast } from '~/hooks/Toast';
import { useCep } from '~/hooks/CepFinder';

import Header from '~/components/Header';
import Input from '~/components/Input';
import ItemCard from '~/components/ItemCard';
import ItemDetail from '~/components/ItemDetail';

import {
  Container,
  Body,
  SearchBox,
  Row,
  FormStyled,
  ListContainer,
} from './styles';

function Main() {
  const formRef = useRef(null);
  // const { addToast } = useToast();
  const { FindCepByCode, loading, FindCepByUfCityAddress, data } = useCep();

  const [inputType, setInputType] = useState('CEP');

  const handleSubmitCode = useCallback(async (FormData) => {
    const cep = FormData.cep?.replace(/-/g, '').split('_')[0];

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
    }
  }, []);

  const handleSubmitUf = useCallback(async (FormData) => {
    let uf;
    let city;
    let ufCity;

    if (FormData.ufCity) {
      uf = FormData.ufCity?.split(' ')[0].trim();
      city = FormData.ufCity?.split(uf)[1].trim();
      ufCity = `${uf} ${city}`;
    }

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        uf: Yup.string().required('O campo de UF/Cidade é obrigatório'),
        street: Yup.string(),
      });

      await schema.validate(
        { uf: ufCity, street: FormData.street },
        {
          abortEarly: false,
        },
      );

      await FindCepByUfCityAddress({
        uf,
        city,
        address: FormData.street,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        <SearchBox>
          <Row>
            <FormStyled
              ref={formRef}
              onSubmit={inputType === 'CEP' ? handleSubmitCode : handleSubmitUf}
            >
              {inputType === 'CEP' ? (
                <>
                  <Input
                    name="cep"
                    Icon={FaSearch}
                    placeholder="Pesquisar por Cep"
                    mask="99999-999"
                    type={inputType}
                  />
                </>
              ) : (
                <>
                  <Input
                    name="ufCity"
                    Icon={FaSearch}
                    placeholder="Pesquisar por UF/Cidade"
                    type={inputType}
                  />

                  <Input
                    name="street"
                    Icon={FaRoad}
                    placeholder="logradouro"
                    type="logradouro"
                  />
                </>
              )}

              <select onChange={(event) => setInputType(event.target.value)}>
                <option value="CEP">CEP</option>
                <option value="UF">UF/Cidade</option>
              </select>

              <button type="submit">
                {loading ? (
                  <ClipLoader size={20} color="#FFF" loading={loading} />
                ) : (
                  <FaPaperPlane size={20} />
                )}
              </button>
            </FormStyled>
          </Row>
          <ListContainer>
            <ItemCard data={data} />
            <hr />
            <ItemDetail />
          </ListContainer>
        </SearchBox>
      </Body>
    </Container>
  );
}

export default Main;
