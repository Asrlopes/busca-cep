/* eslint-disable no-console */
import React, { useContext, useCallback, useState, createContext } from 'react';
import api from '~/services/api';
import { useToast } from './Toast';

const CepContext = createContext({});

const CepProvider = ({ children }) => {
  const { addToast } = useToast();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const FindCepByCode = useCallback(async ({ code }) => {
    setLoading(true);

    try {
      const response = await api.get(`${code}/jsson/`);

      const responseData = response.data;

      console.log(responseData, 'a');

      if (responseData.erro) {
        addToast({
          type: 'error',
          title: 'Erro na busca',
          description: 'Cep inexistente',
        });
      }

      setData(response.data.length ? responseData : [responseData]);
      setLoading(false);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description:
          'Não foi possivel solicitar o cep, por favor verifique sua conexão com a internet',
      });
      setLoading(false);
    }
  }, []);

  return (
    <CepContext.Provider value={{ data, FindCepByCode, loading }}>
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
