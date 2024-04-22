'use client'
import MyButton from '@/components/MyButton'
import useModal from '@/hooks/useModal'
import React from 'react'
import ModalAddNew from './Component/ModalAddNew'

const ListSorted = () => {
  const { openModal } = useModal()

  const handleAddNew = () => {
    openModal({
      body: (
        <ModalAddNew />
      ),
      title: 'Add new Project',
      width: '70vw'
    })
  }
  return (
    <div>

      ListSorted
      <MyButton onClick={handleAddNew}>
        Add new
      </MyButton>
    </div>
  )
}

export default ListSorted
