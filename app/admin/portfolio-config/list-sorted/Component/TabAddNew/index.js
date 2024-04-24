import MyButton from '@/components/MyButton'
import MyImage from '@/components/MyImage'
import MyInput from '@/components/MyInput'
import { LOCAL_STORAGE } from '@/config/app'
import { saveDataLocal } from '@/utils/function'
import { EditOutlined } from '@ant-design/icons'
import { Image, Input, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import React, { useState } from 'react'
const initData = {
  title: '',
  tunnel: '',
  bg: '',
  des: '',
  video: ''
}
const TabAddNew = () => {
  const [formData, setFormData] = useState(initData)

  const onChangeData = (value, key) => {
    setFormData({ ...formData, [key]: value })
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const uploadImage = (info, key) => {
    try {
      // getBase64(info, (url) => {
      getBase64(info.file.originFileObj, (url) => {
        setFormData({ ...formData, [key]: url })
      })
    } catch (error) {
      console.log('====================================')
      console.log('uploadImage', error)
      console.log('====================================')
    }
  }

  const uploadVideo = (info, key) => {
    try {
      getBase64(info.file.originFileObj, (url) => {
        setFormData({ ...formData, [key]: url })
      })
    } catch (error) {
      console.log('====================================')
      console.log('error video', error)
      console.log('====================================')
    }
  }

  const handleSaveItem = () => {
    saveDataLocal(LOCAL_STORAGE.listItemSorted, formData)
    // setFormData(initData)
  }
  console.log('====================================')
  console.log({ formData })
  console.log('====================================')

  const renderEditImg = (key) => {
    return (
      formData[key]
        ? (
          <div className='w-full flex flex-col justify-center gap-3'>
            <Image
              src={formData[key]}
              alt="avatar"
              style={{
                width: '100%'
              }}
            />
            <MyButton type={2} className={'m-auto'} onClick={() => setFormData({ ...formData, [key]: '' })}>
          Clear
            </MyButton>
          </div>
        )
        : (
          // <ImgCrop
          //   aspect={1}
          //   aspectSlider
          //   // onModalOk={(file) => uploadImage(file, key)}
          // >
          <Upload
            action={'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'}

            showUploadList={false}
            // accept={ 'image/png, image/jpeg,image/jpg, image/gif .png,.jpg,.jpeg,.gif,.svg'}
            accept={ 'image/png, image/jpeg,image/jpg, image/gif'}
            className="avatar-uploader"
            // onChange={file => uploadBg(file, key)}
            onChange={file => uploadImage(file, key)}
          >
            <label className='edit-avatar' htmlFor='avatar'>
                  Background
              <EditOutlined className='ml-2' style={{ fontSize: 20 }} />
            </label>

          </Upload>
          // </ImgCrop>
        )
    )
  }

  const renderEditVideo = (key) => {
    return (
      formData[key]
        ? (
          <div className='w-full flex flex-col justify-center gap-3'>
            <video
              className='w-[90%]'
              playsInline
              loop
              autoPlay
            >
              <source src={formData[key]}/>
            </video>

            <MyButton type={2} className={'m-auto'} onClick={() => setFormData({ ...formData, [key]: '' })}>
          Clear
            </MyButton>
          </div>
        )
        : (
          <Upload
            showUploadList={false}
            accept={'.mp4,.webm' }
            className="avatar-uploader"
            onChange={file => uploadVideo(file, key)}
          >
            <label className='edit-avatar' htmlFor='avatar'>
        Background
              <EditOutlined className='ml-2' style={{ fontSize: 20 }} />
            </label>

          </Upload>
        )
    )
  }

  return (
    <div className='flex w-ful justify-between gap-5 h-full'>
      <div className='flex-1 max-w-[49%]'>
        <div className='w-full flex flex-col gap-3'>
          <div>
            <div>
            Title
            </div>
            <MyInput
              value={formData.title}
              onChange={text => onChangeData(text, 'title')}
            />
          </div>
          <div>
            <div>
            Description
            </div>
            <MyInput
              value={formData.des}
              type='other'
              onChange={text => onChangeData(text, 'des')}

            />
          </div>
          <div className='flex gap-5'>
            <div className='flex-1'>
              {renderEditImg('bg') }

            </div>
            <div className='flex-1'>
              {renderEditVideo('video') }

            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 max-w-[49%]'>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='text-medium text-center w-full'>
              Preview
          </div>
          <div className='w-full max-w-[400px] bg-slate-400'>
            <div className='overflow-hidden   w-full flex flex-col relative justify-center items-center p-[50%]'>
              <div className='absolute inset-0 w-full h-full bg-green-200 flex flex-col'>
                <div className='absolute inset-0 w-full text-center text-medium mt-5'>
                  {formData?.title}
                </div>
                <div
                  className='absolute indent-0 w-full h-full bg-no-repeat bg-center bg-cover '
                  style={{ backgroundImage: `url(${formData.bg})` }}
                />

                <div className='absolute bottom-5 w-full text-center text-medium mt-5'>
                  {formData?.title}
                </div>

              </div>

            </div>
            <div className='h-16 flex gap-5 items-center p-2'>
              <div className='relative h-10 w-10'>
                <MyImage
                  url={formData.bg}
                  height='100%'
                  className='h-full w-auto'
                />
              </div>
              <div className='flex h-full flex-col'>
                <div className='font-bold'>
                  {formData?.title}
                </div>
                <div >
                  {formData?.des}
                </div>
              </div>
            </div>
          </div>
          <MyButton className={'mt-4'} size='large' onClick={handleSaveItem}>
            Save Item
          </MyButton>

        </div>
      </div>
    </div>
  )
}

export default TabAddNew
