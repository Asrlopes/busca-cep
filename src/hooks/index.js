import React from 'react';

import { ToastProvider } from './Toast';
import { CepProvider } from './CepFinder';

const AppProvider = ({ children }) => (
  <ToastProvider>
    <CepProvider>{children}</CepProvider>
  </ToastProvider>
);

export default AppProvider;
