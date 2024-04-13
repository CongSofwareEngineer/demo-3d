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
      <Link className='hover:text-black hover:underline' href={url}>{title}</Link>
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
      router.push('/admin/portfolio-config')
    }
    if (!isLogin) {
      // router.push('/admin/login')
    }
  }, [patchName, isLogin])

  const items = [
    {
      key: '1',
      label: 'Portfolio ',
      children: <SubTabMenu
        url={'/admin/portfolio-config'}
        title={'List Production'}
      />
    }
  ]

  return (
    <div className='w-[300px]  text-white h-auto border-r-4 border-r-[#00000047] bg-[#00000047]'>
      <div className='text-title text-center mb-7 mt-7' >
        ADMIN TREE STUDIO
      </div>
      <CollapseContainer defaultActiveKey={'1'} items={items}/>
      <div onClick={logOut} className='border-b-[1px] border-b-[#d9d9d9] cursor-pointer pl-6 mt-3 pb-3 hover:text-black hover:underline'>
        Log out
      </div>
    </div>
  )
}

export default MenuTab
