'use client'
// import { AntdRegistry } from '@ant-design/nextjs-registry'

// const RootLayout = ({ children }) => (
//   <AntdRegistry>{children}</AntdRegistry>
// )

// export default RootLayout

import React, { useState } from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet } from 'styled-components'

const StyledComponentsRegistry = ({ children }) => {
  const cache = React.useMemo(() => createCache(), [])
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ))
  if (typeof window !== 'undefined') return <>{children}</>
  return (

    <StyleProvider
      sheet={styledComponentsStyleSheet.instance}
      cache={cache}
      hashPriority='high'
    >
      {children}
    </StyleProvider>
  )
}

export default StyledComponentsRegistry
