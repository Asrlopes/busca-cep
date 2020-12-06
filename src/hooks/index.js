import React from 'react';

import { ToastProvider } from './Toast';

const AppProvider = ({ children }) => <ToastProvider>{children}</ToastProvider>;

export default AppProvider;
