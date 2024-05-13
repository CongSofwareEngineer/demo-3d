import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata (_, parent) {
  const title = 'Education'
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title,
    override: true
  })

  return metaData
}
const Layout = async ({ children }) => {
  return children
}

export default Layout
