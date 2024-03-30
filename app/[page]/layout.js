import { PAGE_EX } from '@/config/app';

export async function generateMetadata ({ params, searchParams }, parent) {
  const metaData = { description: 'coming soon' }
  switch (params.page) {
  case PAGE_EX.home:
    metaData.title = 'Home'
    break;
  case PAGE_EX.ourService:
    metaData.title = 'Our Service'
    break;
  case PAGE_EX.aboutUs:
    metaData.title = 'About Us'
    break;
  case PAGE_EX.portfolio:
    metaData.title = 'Portfolio'
    break;
  default:
    metaData.title = 'Contact'

    break;
  }
  return {
    ...metaData
  }
}
const Layout = ({ children }) => {
  return (
    children
  )
}

export default Layout
