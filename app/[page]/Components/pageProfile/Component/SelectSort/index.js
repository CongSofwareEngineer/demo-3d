import { COLOR } from '@/config/app';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Select, Space } from 'antd';
import React from 'react';
import styled from 'styled-components';
const SelectCustom = styled(Select)`
  background: transparent !important;
  .ant-select-selector {
    background: transparent !important;
  }
  .ant-select-selector {
    padding: 0px !important;
    padding-left: 4px;
    border-color: white !important;
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
    background-color:transparent;
    .ant-select-item-option-selected{
      /* background: #1146c0; */
      background: transparent;
      /* color: ${COLOR.greenMain}; */
    }
  }
`;
const fakeData = [
  { name: 'text 1', value: 'text1' },
  { name: 'text 2', value: 'text2' }
];

const SelectSort = () => {
  const renderDrops = () => {
    return <div>renderDrops</div>;
  };
  return (
    <div>
      <div className="flex items-center gap-4">
        <SelectCustom
          className="min-w-[200px]"
          getPopupContainer={(trigger) => trigger.parentElement}
          options={fakeData}
          showSearch
          dropdownRender={(menu) => <div className="bg-green-200">{menu}</div>}
          suffixIcon={
            <div className="h-full flex items-center justify-center w-[50px] bg-[#00FFCE]">
              <DownOutlined className="text-blue-800 text-xl" />
            </div>
          }
        />

        <Button className="rounded-lg px-3 bg-[#00FFCE] h-full text-blue font-bold  ">
          GO
        </Button>
      </div>
    </div>
  );
};

export default SelectSort;
