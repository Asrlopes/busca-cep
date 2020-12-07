import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  height: 80%;
  max-width: 56.25rem;
  justify-content: center;
  margin: 1.875rem auto;
  padding: 1.875rem;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem #000000;
`;

export const SearchBox = styled.div`
  flex: 1;
  height: 100%;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */

  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  flex: 1;
  height: 66vh;

  hr {
    background-color: red;
    height: 90%;
    align-self: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: #312e38;
    height: 3.125rem;
    border-radius: 0.625rem;
    border: 0;
    color: #fff;
    width: 4vw;
    font-weight: 500;
    transition: background-color 0.2s;
    margin: 0 0.3125rem;
    border: 0.0625rem solid #fff;
    box-shadow: 0rem 0rem 0.625rem 0.0625rem #000000;

    &:hover {
      background-color: ${shade(0.2, '#312e38')};
    }
  }

  select {
    -webkit-appearance: none; /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox*/
    background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif)
      no-repeat #eeeeee; /* Imagem de fundo (Seta) */
    background-position: 6vw center; /*Posição da imagem do background*/
    width: 9vw; /* Tamanho do select, maior que o tamanho da div "div-select" */

    border: 0.0625rem solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    height: 3.125rem;
    padding: 0.3125rem;
    border-radius: 0.625rem;
    margin: 0 0.3125rem;
    box-shadow: 0rem 0rem 0.625rem 0.0625rem #000000;
  }
`;
