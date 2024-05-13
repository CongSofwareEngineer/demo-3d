import React from 'react'
import { ConfigProvider } from 'antd'

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider

      modal={{
        style: {
          background: '#4C94D8',
          paddingBottom: 0
        }
      }}

    >{children}</ConfigProvider>
  )
}

export default AntdProvider
