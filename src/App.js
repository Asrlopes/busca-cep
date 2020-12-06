import React from 'react';
import GlobalStyle from '~/styles/global';
import Main from '~/pages/Main';

import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Main />
    </AppProvider>
  );
}

export default App;
