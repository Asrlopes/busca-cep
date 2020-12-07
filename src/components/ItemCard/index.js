import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationStyle.css';

import Lottie from 'react-lottie';
import animationData from '~/lotties/error.json';

import { Container, PaginationContainer, ItemContainer } from './styles';

import { useCep } from '~/hooks/CepFinder';

function ItemCard({ data }) {
  const { StoreCepData, emptyData } = useCep();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  let currentPageData;
  let pageCount;

  if (data) {
    currentPageData = data.slice(offset, offset + PER_PAGE).map((item) => (
      <ItemContainer
        key={item.cep}
        onClick={() => StoreCepData({ cepData: item })}
      >
        <span>
          {item.localidade}, {item.uf}
        </span>
        <span>Cep: {item.cep}</span>
      </ItemContainer>
    ));
    pageCount = Math.ceil(data.length / PER_PAGE);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <Container>
      {currentPageData}
      <PaginationContainer>
        {emptyData && (
          <div>
            <h3>
              Desculpa, não conseguimos localizar o cep, verifique os dados
              informados.
            </h3>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        )}

        {data?.length > 5 && (
          <ReactPaginate
            previousLabel="← Voltar"
            nextLabel="Próximo →"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
            activeClassName="pagination__link--active"
          />
        )}
      </PaginationContainer>
    </Container>
  );
}

export default ItemCard;
