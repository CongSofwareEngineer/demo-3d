import MyInput from '@/components/MyInput'
import React, { useLayoutEffect, useState } from 'react'
import { ButtonBase } from '../ItemCourse'
import { Select } from 'antd'
import useModal from '@/hooks/useModal'
import { showNotificationSuccess } from '@/utils/function'
const timeConsulting = [
  {
    label: '8h - 12h',
    value: '1'
  },
  {
    label: '13h - 17h',
    value: '2'
  },
  {
    label: '17h - 20h',
    value: '3'
  }
]
const ModalRegister = ({ data }) => {
  const { closeModal } = useModal()
  const [formData, setFormData] = useState(null)
  useLayoutEffect(() => {
    const initData = {
      name: '',
      numberPhone: '',
      time: timeConsulting[0]
    }
    setFormData(initData)
  }, [])

  const handleSave = () => {
    showNotificationSuccess('Dăng ký thành công')

    closeModal()
  }

  return (
    formData && <div className='text-white w-full flex flex-col gap-4 justify-center items-center'>
      <div className='text-[24px] text-center font-semibold mt-2 w-full' >
      NHẬN ƯU ĐÃI VÀ QUÀ TẶNG

      ĐĂNG KÝ NGAY
      </div>
      <div>
      Tư vấn theo khung giờ bạn chọn
      </div>
      <MyInput
        placeholder='Họ và tên *'
        value={formData.name}
        className={'h-9'}
      />
      <MyInput
        placeholder='Số điện thoại * (ví dụ: 0393432423) *'
        value={formData.numberPhone}
        className={'h-9'}

      />
      <div className='w-full flex flex-col gap-2'>
        <div>
        Thời gian tư vấn :
        </div>
        <Select
          className='w-full h-9'
          value={formData.time}
          options={timeConsulting}
        />
      </div>

      <ButtonBase onClick={handleSave} >
        <div>
        Gửi
        </div>
      </ButtonBase>
    </div>
  )
}

export default ModalRegister
