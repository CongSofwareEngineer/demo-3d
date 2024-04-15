import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata (_, parent) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase
  })

  return metaData
}
const Layout = async ({ children }) => {
  // await delay(3000)
  return children
}

export default Layout
