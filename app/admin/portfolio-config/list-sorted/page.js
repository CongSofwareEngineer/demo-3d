'use client'
import useModal from '@/hooks/useModal'
import React from 'react'
import { Tabs } from 'antd'
import TabManage from './Component/TabManage'
import TabAddNew from './Component/TabAddNew'

const ListSorted = () => {
  const { openModal } = useModal()

  const onChange = (second) => { }
  const items = [
    {
      key: '1',
      label: <div>TabManage</div>,
      children: <TabManage />
    },
    {
      key: '2',
      label: <div>Tab add new</div>,
      children: <TabAddNew />
    }
  ]
  return (
    <Tabs
      items={items}
      onChange={onChange}
    />
  )
}

export default ListSorted
