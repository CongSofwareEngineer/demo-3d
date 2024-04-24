import { Table } from 'antd'
import React from 'react'
const dataFake = []
for (let index = 0; index < 10; index++) {
  dataFake.push({
    name: `diencong${index}`,
    bg: 'https://www.tree.net.vn/_next/image?url=%2Fassets%2Fimages%2FHome%2FbtnContact.webp&w=1080&q=75',
    video: 'https://www.tree.net.vn/assets/video/bannerHome.webm',
    title: 'Dien Cong 1'
  })
}
const TabManage = () => {
  const columns = [
    {
      title: 'name',
      key: 'name',
      dataIndex: 'name',
      render: (field, record, index) => <span>{field}</span>
    },
    {
      title: 'title',
      key: 'title',
      dataIndex: 'title',
      render: (field, record, index) => <span>{field}</span>
    },
    {
      title: 'video',
      key: 'video',
      dataIndex: 'video',
      render: (field, record, index) => {
        return (
          <video
            className='w-28'
            autoPlay
            loop
            controls={false}
          >
            <source src={field} />
          </video>
        )
      }
    }
  ]
  return (
    <Table
      columns={columns}
      dataSource={dataFake}
      className='w-full'
    />
  )
}

export default TabManage
