import { generateMetaBase } from '@/utils/serverNext'
import LayoutAdmin from './page'

export async function generateMetadata (_, parent) {
  const title = 'Admin'
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title
  })

  return metaData
}
const Layout = async ({ children }) => {
  return (
    <LayoutAdmin >
      {children}
    </LayoutAdmin>
  )
}

export default Layout
