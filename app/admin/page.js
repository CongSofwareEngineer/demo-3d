'use client'
import MenuTab from './Component/MenuTab'

const LayoutAdmin = ({ children }) => {
  return (
    <div className='flex flex-1 w-full min-h-full  bg-white'>
      <MenuTab />
      <div className='flex-1 relative pt-6'>
        {children}
      </div>
    </div>
  )
}

export default LayoutAdmin
