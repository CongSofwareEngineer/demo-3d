import { Button } from 'antd'
import React from 'react'
import styled, { css } from 'styled-components'
const ButtonCustom = styled(Button)`
  &:hover {
    font-weight: 700;
  }
  color: white !important;
  ${(props) =>
    props.$type === 1
      ? css`
          background: linear-gradient(
            to right,
            rgb(20, 22, 60) 0%,
            rgb(3, 33, 123) 79%
          ) !important ;
        `
      : css`
          background: linear-gradient(
            to right,
            rgb(225, 77, 42) 0%,
            rgba(225, 77, 42, 0.7) 69%
          ) !important ;
        `}
`
const MyButton = ({
  onClick,
  className,
  type = 1,
  loading = false,
  disable = false,
  children,
  size = 'medium',
  ...props
}) => {
  return (
    <ButtonCustom
      $type={type}
      onClick={onClick}
      className={`rounded-lg ${className}`}
      loading={loading}
      disabled={disable}
      size={size}
      {...props}
    >
      {children}
    </ButtonCustom>
  )
}

export default MyButton
