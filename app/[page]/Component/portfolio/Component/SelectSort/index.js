import MyImage from '@/components/MyImage'
import { COLOR, MENU_SORTER } from '@/config/app'
import { images } from '@/config/images'
import { translate } from '@/utils/language'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Select, Space } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

const SelectCustom = styled(Select)`
  background: transparent !important;
  height: 35px;
  .ant-select-selector {
    background: transparent !important;
  }
  .ant-select-selector {
    padding: 0px;
    padding-left: 4px;
    border-color: white !important;
    .ant-select-selection-item {
      color: ${COLOR.greenMain};
      font-size: 16px;
      font-weight: 700;
    }
  }
  .ant-select-arrow {
    inset-inline-end: 0px !important;
    height: 100% !important;
    top: 0 !important;
    margin-top: 0px !important ;
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    overflow: hidden !important;
    opacity: 1 !important;
  }
  .ant-select-dropdown {
    padding: 0px;
    background-color: transparent;
    .rc-virtual-list-holder-inner {
      .ant-select-item {
        text-transform: uppercase;
        font-weight: 700;
        color: ${COLOR.blueMain};
        font-size: 15px;

        .ant-select-item-option-content {
          padding-top: 5px;
        }
        ::before {
          content: " ";
          position: absolute;
          top: -1px;
          left: 10%;
          border-bottom: 1px solid ${COLOR.blueMain};
          width: 80%;
          height: 100%;
        }
      }
      .ant-select-item:first-child {
         padding-top: 15px;
      }
      .ant-select-item:last-child {
         ::before {
          border-bottom: 0px;
        }
      }
    }

    .ant-select-item-option-selected {
      background: ${COLOR.blueMain};
      .ant-select-item-option-content {
        color: ${COLOR.greenMain} !important;
      }
    }
    .ant-select-item-option-active {
      &:hover {
        .ant-select-item-option-content {
          color: ${COLOR.greenMain} !important;
        }
        background: ${COLOR.blueMain};
        color: ${COLOR.greenMain};
      }
    }
  }
`
const menuSorterBy = Object.values(MENU_SORTER).map((e) => ({
  name: e,
  value: e
}))

const SelectSort = ({
  itemSelected,
  setItemSelected,
  openSorted,
  onClickSorted,
  handleClickGo
}) => {
  return (
    <div className="relative  w-full  pt-[20px]  pl-[30px]  pb-[30px]  pr-[30px]">
      <Image
        className='inset-0 w-full h-full'
        fill
        src={images.profile.bgSorter}
        alt='background-sorter'
      />
      <div className='relative text-green-main mb-2 uppercase font-bold '>
        {translate('profile.sorted')}
      </div>
      <div className='flex items-center gap-4  relative'>
        <SelectCustom
          value={itemSelected}
          onChange={(value) => setItemSelected(value)}
          className="min-w-[calc(100%-70px)]"
          getPopupContainer={(trigger) => trigger.parentElement}
          options={menuSorterBy}
          open={openSorted}
          onClick={onClickSorted}
          dropdownRender={(menu, index) => (
            <div className={'relative pb-2'}>
              <Image
                className='w-full h-full inset-0 '
                fill
                src={images.profile.bgMenuSorted}
              />
              {menu}
            </div>
          )}
          suffixIcon={
            <div
              className={'relative h-full flex items-center justify-center w-[50px] bg-green-main'}
            >
              <DownOutlined className="text-blue-800 text-xl" />
            </div>
          }
        />

        <Button
          onClick={handleClickGo}
          className={'uppercase h-[35px] rounded-lg px-3 bg-green-main  text-blue font-bold flex-1  w-[70px]'}
        >
          {translate('common.go')}
        </Button>
      </div>

    </div>
  )
}

export default SelectSort
