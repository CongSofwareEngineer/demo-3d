'use client';
import React, { useLayoutEffect, useState } from 'react'
import MyModal from '../MyModal'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import Container from '../Container'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const language = useSelector((state) => state.app.language)

  useLayoutEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <Container>
      <IntlProvider
        defaultLocale={'vi'}
        locale={language?.locale || 'vn'}
        messages={language?.messages || {}}
      >
        {isClient && children}
      </IntlProvider>
    </Container>
  );
};

export default ClientRender;
