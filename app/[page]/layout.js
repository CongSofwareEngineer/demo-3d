import { PAGE_EX } from '@/config/app'
import PageScreen from './page.js'
import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata ({ params }, parent) {
  let title = ''
  switch (params.page) {
  case PAGE_EX.home:
    title = 'Home'
    break
  case PAGE_EX.ourService:
    title = 'Our Service'
    break
  case PAGE_EX.aboutUs:
    title = 'About Us'
    break
  case PAGE_EX.portfolio:
    title = 'Portfolio'
    break
  default:
    title = 'Contact'

    break
  }
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title,
    override: true
  })

  return metaData
}
const Layout = async ({ params }) => {
  // await delay(3000)
  return <PageScreen page={params.page} />
}

export default Layout
