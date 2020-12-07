/* eslint-disable no-console */
import React, { useContext, useCallback, useState, createContext } from 'react';
import api from '~/services/api';
import { useToast } from './Toast';

const CepContext = createContext({});

const CepProvider = ({ children }) => {
  const { addToast } = useToast();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [emptyData, setEmptyData] = useState(false);

  const FindCepByCode = useCallback(async ({ code }) => {
    setLoading(true);

    try {
      const response = await api.get(`${code}/json/`);

      const responseData = response.data;

      if (responseData.erro) {
        addToast({
          type: 'error',
          title: 'Erro na busca',
          description: 'Cep inexistente',
        });

        setEmptyData(true);
        setLoading(false);
        setData(null);
        return;
      }

      setData(response.data.length ? responseData : [responseData]);
      setEmptyData(false);
      setLoading(false);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description:
          'Não foi possivel solicitar o cep, por favor verifique sua conexão com a internet',
      });
      setEmptyData(false);
      setData(null);
      setLoading(false);
    }
  }, []);

  const FindCepByUfCityAddress = useCallback(async ({ uf, city, address }) => {
    if (address && address.length < 3) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description: 'O logradouro deve ter no mínimo 3 caracteres',
      });
      return;
    }

    if (!city) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description: 'Por favor informe a cidade',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await api.get(`${uf}/${city}/${address}/json/`);

      const responseData = response.data;

      if (responseData.length === 0) {
        addToast({
          type: 'error',
          title: 'Erro na busca',
          description:
            'Verifique o formato uf cidade e caso necessário adicione um logradouro',
        });

        setEmptyData(true);
        setLoading(false);
        setData(null);
        return;
      }

      setData(response.data.length ? responseData : [responseData]);
      setEmptyData(false);
      setLoading(false);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description:
          'Não foi possivel solicitar o cep, por favor verifique sua conexão com a internet',
      });
      setEmptyData(false);
      setData(null);
      setLoading(false);
    }
  }, []);

  const StoreCepData = ({ cepData }) => {
    setItem(cepData);
  };

  return (
    <CepContext.Provider
      value={{
        data,
        FindCepByCode,
        FindCepByUfCityAddress,
        loading,
        StoreCepData,
        item,
        emptyData,
      }}
    >
      {children}
    </CepContext.Provider>
  );
};

function useCep() {
  const context = useContext(CepContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { CepProvider, useCep };
