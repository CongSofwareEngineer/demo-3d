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
  placeholder = 'Enter',
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
            placeholder={placeholder}
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
            placeholder={placeholder}
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
            placeholder={placeholder}
            {...props}
          />
        )
      }
    </>
  )
}

export default MyInput
