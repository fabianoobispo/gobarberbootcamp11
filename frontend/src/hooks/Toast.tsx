import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface ToastMassage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  desciption?: string;
}

interface ToastContextData {
  addToast(messages: Omit<ToastMassage, 'id'>): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMassages] = useState<ToastMassage[]>([]);

  const addToast = useCallback(
    ({ type, title, desciption }: Omit<ToastMassage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        desciption,
      };
      setMassages((state) => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMassages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used withi a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
