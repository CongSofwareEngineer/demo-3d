import { Input, InputNumber } from 'antd'
import React from 'react'
import styles from './styled.modul.scss'
const MyInput = ({
  value,
  onChange,
  className,
  rightIcon = null,
  leftIcon = null,
  type = 'text',
  controls = true,
  minLine = 3,
  ...props
}) => {
  return (
    <>
      {
        type === 'text' && (
          <Input
            value={value}
            onChange={text => onChange(text.target.value)}
            className={className}
            suffix={rightIcon}
            prefix={leftIcon}
            {...props}
          />
        )
      }

      {
        type === 'number' && (
          <InputNumber
            value={value}
            onChange={text => onChange(text)}
            className={className}
            suffix={rightIcon}
            prefix={leftIcon}
            controls={controls}
            {...props}
          />
        )
      }

      {
        type === 'other' && (
          <Input.TextArea
            value={value}
            onChange={text => onChange(text.target.value)}
            className={className}
            suffix={rightIcon}
            prefix={leftIcon}
            controls={controls}
            rows={minLine}
            {...props}
          />
        )
      }
    </>
  )
}

export default MyInput
