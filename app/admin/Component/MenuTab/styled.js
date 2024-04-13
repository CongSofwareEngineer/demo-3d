import { Collapse } from 'antd'
import styled from 'styled-components'

export const CollapseContainer = styled(Collapse)`
  border-radius: 0px;
  border: 0px;
  background: transparent;
  border-top: 1px solid #d9d9d9;
  color: white !important;
  font-size: 18px;
  .ant-collapse-item {
    background: transparent;
    .ant-collapse-header{
      color: white !important;

    }
  }
  .ant-collapse-item:last-child {
    border-radius: 0px;
    color: white !important;
  }
  .ant-collapse-content{
    background: transparent;
    color: white !important;

  }
`
