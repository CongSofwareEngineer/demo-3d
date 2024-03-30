import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Select, Space } from 'antd'
import React from 'react'
import styled from 'styled-components';
const SelectCustom = styled(Select)`
  background: transparent !important;
  .ant-select-selector{
      background: transparent !important;
    }
  .ant-select-selector{
      padding: 0px !important;
    }
    .ant-select-arrow{
      inset-inline-end: 0px  !important;
      height: 100% !important;
      top:0 !important;
      margin-top: 0px !important ;
      border-top-right-radius: 8px !important;
      border-bottom-right-radius: 8px !important;
      overflow: hidden !important;
    }
    .ant-select-selector{
      &:hover{
        border-color: white !important;
      }
    }
`;
const SelectSort = () => {
  return (
    <div >
      <div className='flex items-center gap-4'>
        <SelectCustom
          className='min-w-[200px]'
          getPopupContainer={(trigger) => trigger.parentElement }
          options={[{ name: 'text 1', value: 'text1' }]}
          suffixIcon={(
            <div className='h-full flex items-center justify-center w-[50px] bg-[#00FFCE]'>
              <DownOutlined className='text-blue-800 text-xl' />
            </div>
          )}
        />

        <Button
          className='rounded-lg px-3 bg-[#00FFCE] h-full text-blue font-bold  '>
          GO
        </Button>
      </div>
    </div>
  )
}

export default SelectSort
