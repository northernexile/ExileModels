import React, { createContext, FC, useState } from 'react';

const ALERT_TIME: number = 5000;
const initialState = {
  text: '',
  type: '',
};

interface AlertContextProps {
  text: any;
  type: any;
  setAlert: (text: any, type: any) => void;
}

export const AlertContext = createContext<AlertContextProps>({
  ...initialState,
  setAlert: () => {},
});

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const setAlert = (text: string, type: string) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText('');
      setType('');
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;