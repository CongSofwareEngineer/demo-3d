'use client'
import { useState } from 'react'
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const StyledComponentsRegistry = ({ children }) => {
  // const cache = React.useMemo(() => createCache(), [])
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return (
      <>{styles}</>
    // <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    )
  }
  )
  if (typeof window !== 'undefined') return <>{children}</>
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>

  // <StyleProvider
  //   sheet={styledComponentsStyleSheet.instance}
  //   cache={cache}
  //   hashPriority='high'
  // >
  //   {children}
  // </StyleProvider>
  )
}

export default StyledComponentsRegistry
