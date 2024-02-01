import { ConfigProvider } from 'antd'

import React from 'react'

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider >
      {
        children

      }
    </ConfigProvider>
  )
}

export default AntdProvider
