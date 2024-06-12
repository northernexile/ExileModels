import React, { FC } from 'react';
import { Alert } from '@mui/material';
import useAlert from './useAlert';

const AlertPopup: FC = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <Alert
        severity={type}
        sx={{
          position: 'absolute',
          zIndex: 10,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;