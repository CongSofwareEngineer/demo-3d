'use client'
import React, { useState } from 'react'
import { Button } from 'antd'
import FirebaseAPI from '@/utils/firebaseAPI'
// import GoogleService from '@/utils/googleService'
const LoginAdmin = () => {
  const [videoFile, setVideoFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleLogin = async () => {
    const data = await FirebaseAPI.requestBase({
      nameDB: 'diencong',
      isEncode: true
    })
    console.log({ data })
  }

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0])
  }

  const handleUpload = async () => {
    // const GoogleService = require('@/utils/googleService').default

    // console.log({ videoFile })
    // const data = await GoogleService.uploadVideoInYoutube({
    //   fileUpload: videoFile
    // })
    // console.log({ data })
  }
  return (
    <div>
      LoginAdmin
      <Button onClick={handleLogin}>
        get data
      </Button>
      <div>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  )
}

export default LoginAdmin
