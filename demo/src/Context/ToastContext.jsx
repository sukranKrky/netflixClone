import React, { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={toast}>
      {children}
        <Toaster richColors   position="bottom-right"  /> 
    </ToastContext.Provider>
  );
};