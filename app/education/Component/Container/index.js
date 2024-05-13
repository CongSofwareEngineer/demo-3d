import React from 'react'
import Header from '../Header'
import { Affix } from 'antd'
import styled from 'styled-components'
const ContainerEdu = styled.div`
  font-family: Georgia, 'Times New Roman', Times, serif !important ;
`
const Container = ({ children }) => {
  return (
    <ContainerEdu className='w-full h-full min-h-screen bg-slate-500 flex flex-col items-center '>
      <Affix className='w-full'>
        <Header />
      </Affix>
      <div className='md:px-12 px-5  h-full m-auto'>
        <div className=' w-full bg-white max-w-[1350px] h-full min-h-[calc(100vh-56px)] p-5' >
          {children}
        </div>
      </div>

    </ContainerEdu>
  )
}

export default Container
