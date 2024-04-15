import useAccountAdmin from '@/hooks/useAccountAdmin'
import useRouter from '@/hooks/useRouter'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CollapseContainer } from './styled'
import Link from 'next/link'
import { AppstoreOutlined, EditOutlined, HistoryOutlined, LogoutOutlined, SettingOutlined, ShopOutlined, TagsOutlined } from '@ant-design/icons'

const SubTabMenu = ({
  url, title
}) => {
  return (
    <div className='flex gap-2 ml-4'>
      <AppstoreOutlined />
      <Link className='hover:text-white hover:underline' href={url}>{title}</Link>
    </div>

  )
}

const MenuTab = () => {
  const patchName = usePathname()
  const router = useRouter()
  const { isLogin, logOut } = useAccountAdmin()
  const [isHideBar, setIsHideBar] = useState(false)

  useEffect(() => {
    if (patchName === '/admin') {
      router.push('/admin/portfolio-config/')
    }
    if (!isLogin) {
      // router.push('/admin/login')
    }
  }, [patchName, isLogin])

  const handleLogout = () => {
    logOut()
    router.push('/admin/login')
  }

  const items = [
    {
      key: '1',
      label: 'Portfolio ',
      children: <SubTabMenu
        url={'/admin/portfolio-config/list-sorted'}
        title={'List Production'}
      />
    }
  ]

  return (
    <div className='w-[300px]  text-white h-auto border-r-4 border-r-[#2e2b2b] bg-[#2e2b2b]'>
      <div onClick={() => router.push('/home')} className='cursor-pointer text-title text-center mb-7 mt-7' >
        ADMIN TREE STUDIO
      </div>
      <CollapseContainer defaultActiveKey={'1'} items={items}/>
      <div onClick={handleLogout} className='border-b-[1px] border-b-[#d9d9d9] cursor-pointer pl-6 mt-3 pb-3   hover:underline'>
        Log out
      </div>
    </div>
  )
}

export default MenuTab
