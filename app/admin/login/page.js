'use client'
import React from 'react'
import { Button } from 'antd'
import FirebaseAPI from '@/utils/firebaseAPI'
const LoginAdmin = () => {
  const handleLogin = async () => {
    const data = await FirebaseAPI.requestBase({
      nameDB: 'diencong',
      isEncode: true
    })
    console.log({ data })
  }
  return (
    <div>
      LoginAdmin
      <Button onClick={handleLogin}>
        get data
      </Button>
    </div>
  )
}

export default LoginAdmin
