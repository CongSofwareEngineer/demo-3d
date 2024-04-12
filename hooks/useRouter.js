import React, { useCallback } from 'react'
import { useParams, useRouter as useRouterNext } from 'next/navigation'

const useRouter = () => {
  const router = useRouterNext()

  const push = useCallback((url) => {
    router.push(url)
  }, [router])

  return {
    ...router,
    push
  }
}

export default useRouter
