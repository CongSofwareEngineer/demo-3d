import { TYPE_SCROLL_PAGE } from '@/config/app'
import React, { useEffect, useRef } from 'react'

const useScrollPage = ({

  callBackScrollToTop = () => {},
  callbackScrollToBottom = () => {}
}) => {
  const deboneScrollRef = useRef(false)
  const scrollDirection = useRef(null)

  useEffect(() => {
    const scrollToTop = () => {
      deboneScrollRef.current = true

      callBackScrollToTop()
      window.scrollTo({ top: 0, behavior: 'smooth' })

      setTimeout(() => {
        scrollDirection.current = TYPE_SCROLL_PAGE.toTop
      }, 100)

      setTimeout(() => {
        deboneScrollRef.current = false
      }, 500)
    }

    const scrollToBottom = (viewportHeight) => {
      deboneScrollRef.current = true

      callbackScrollToBottom()
      window.scrollTo({ top: viewportHeight, behavior: 'smooth' })

      setTimeout(() => {
        scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
      }, 100)
      setTimeout(() => {
        deboneScrollRef.current = false
      }, 800)
    }
    window.addEventListener('scroll', (e) => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      if (!scrollDirection.current) {
        if (scrollPosition >= viewportHeight) {
          scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
        } else {
          scrollDirection.current = TYPE_SCROLL_PAGE.toTop
        }
      } else {
        if (scrollDirection.current === TYPE_SCROLL_PAGE.toTop) {
          if (scrollPosition > 0 && scrollPosition < viewportHeight) {
            !deboneScrollRef.current && scrollToBottom(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
          }
        }

        if (scrollDirection.current === TYPE_SCROLL_PAGE.toBottom) {
          if (scrollPosition < viewportHeight) {
            !deboneScrollRef.current && scrollToTop()
          }
        }
      }
    })

    window.addEventListener('scrollend', (e) => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      if (!scrollDirection.current) {
        if (scrollPosition >= viewportHeight) {
          scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
        } else {
          scrollDirection.current = TYPE_SCROLL_PAGE.toTop
        }
      } else {
        if (scrollDirection.current === TYPE_SCROLL_PAGE.toTop) {
          if (scrollPosition > 1 && scrollPosition < viewportHeight) {
            !deboneScrollRef.current && scrollToBottom(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
          }
        }

        if (scrollDirection.current === TYPE_SCROLL_PAGE.toBottom) {
          if (scrollPosition < viewportHeight) {
            !deboneScrollRef.current && scrollToTop()
          }
        }
      }
    })
    return () => {
      window.removeEventListener('scrollend', () => {})
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return {
    deboneScrollRef: deboneScrollRef.current,
    scrollDirection: scrollDirection.current
  }
}

export default useScrollPage
