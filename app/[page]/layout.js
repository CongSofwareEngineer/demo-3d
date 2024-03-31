import { PAGE_EX } from '@/config/app';
import PageScreen from './page';

export async function generateMetadata ({ params }) {
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
const Layout = ({ children, params }) => {
  return (
    <PageScreen page={params.page} />
  )
}

export default Layout
