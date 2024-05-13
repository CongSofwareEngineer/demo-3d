'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Container from './Component/Container'
import ItemCourse from './Component/ItemCourse'

const Education = () => {
  const [dataFake, setDataFake] = useState([])

  useLayoutEffect(() => {
    const dataTemp = []
    for (let index = 0; index < 5; index++) {
      dataTemp.push({
        name: `Khóa học ${index + 1}`,
        price: Math.floor(Math.random() * 100),
        amountLesson: index + 5
      })
    }
    setDataFake(dataTemp)
  }, [])

  return (
    <Container >
      <div className='text-title text-center'>
        {'KHÓA HỌC PHOTOSHOP (PTS) - ADOBE ILLUSTRATOR (AI) CƠ BẢN => CHUYÊN NGHIỆP'}
      </div>
      <div className='mt-5 mb-5 text-[20px]'>
      Không quan trọng bạn là ai, bạn đang làm việc hay học tập ở ngành nghề nào, chỉ cần bạn yêu thích sáng tạo, mong muốn phát triển thêm kỹ năng về Photoshop – Illustrator thì đều có thể tham gia khóa học.

Tùy thuộc vào sở thích, nhu cầu mà bạn có thể chọn khóa Photoshop Cơ bản, Illustrator Cơ bản hoặc có thể học cùng lúc cả hai công cụ. Từ đó, trang bị đầy đủ kiến thức và kỹ năng cần thiết để tiến xa hơn trong lĩnh vực thiết kế đồ họa hay bất cứ ngành nghề nào khác.
      </div>
      <div className='text-[24px] uppercase font-normal mb-3'>
      (*) Học phí - thường lượng
      </div>
      {/* <div className=' flex gap-6 flex-wrap items-center justify-center'> */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   md:gap-10 gap-5  justify-center '>
        {
          dataFake.map((item, index) => {
            return (
              <ItemCourse
                key={index}
                data={item}
              />
            )
          })
        }
      </div>
    </Container>

  )
}

export default Education
