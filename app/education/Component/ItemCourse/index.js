import useModal from '@/hooks/useModal'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import ModalRegister from '../ModalRegister'
const autoZoom = keyframes`
  to{
    transform: scale(1.1);
  }
`
const ContainerItem = styled.div`
  background:linear-gradient(to right, #5cc5fb 0, #2e3192 65%);
  border-radius: 16px;
  width:100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer; 
`

export const ButtonBase = styled.div`
  cursor: pointer;
   background: linear-gradient(to right,#ff1491 0,#ff1491 65%);
  width: 70%;
  max-width: 200px;
  text-align: center;
   padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 24px;
  display: flex ;
  justify-content: center;
  align-items: center;
  &:hover{
   > div{
    transform: scale(1.1);
    font-weight: 700;
    transition: all 0.5s;
    }
  }
`

const ButtonRegister = styled(ButtonBase)`
  cursor: pointer;
  animation: ${autoZoom} 1s linear alternate infinite;
  background: linear-gradient(to right,#ff1491 0,#ff1491 65%);
  width: 70%;
  max-width: 200px;
  text-align: center;
  /* height:40px; */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 24px;
  display: flex ;
  justify-content: center;
  align-items: center;
  &:hover{
   > div{
    transform: scale(1.1);
    font-weight: 700;
    transition: all 0.5s;
    }
  }
`

const ItemCourse = ({ data }) => {
  const { openModal } = useModal()

  const handleRegister = () => {
    openModal({
      body: (
        <ModalRegister data={data} />
      ),
      width: '500px'

    })
  }
  return (
    <ContainerItem>
      <div className='p-2 pt-3 uppercase text-2xl text-white'>
        {data.name}
      </div>
      <div className='w-full  h-[2px] bg-white' />
      <div className='w-full flex-1 p-3 flex flex-col justify-center items-center gap-4'>
        <div className='text-center font-semibold text-[20px]'>
          {`${data.price}.000.000 VNĐ`}
        </div>
        <div className='text-[18px]'>
          {`Số buổi học : ${data.amountLesson}`}
        </div>
        <ButtonRegister onClick={handleRegister}>
          <div>
            Đăng ký
          </div>
        </ButtonRegister>
      </div>
    </ContainerItem>
  )
}

export default ItemCourse
