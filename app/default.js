'use client'
import React from 'react'
import loadingFirstLoad from '@/public/assets/json/loadingFirstLoad.json'
import LoadingRoutePage from '@/components/LoadingRoutePage'

const Default = () => {
  return (
    <LoadingRoutePage src={loadingFirstLoad} />
  )
}

export default Default
