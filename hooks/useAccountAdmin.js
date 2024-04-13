import { setUserAdmin } from '@/Redux/appSlice'
import { showNotificationError } from '@/utils/function'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const useAccountAdmin = () => {
  const userAmin = useSelector(state => state.app.userAmin)
  const dispatch = useDispatch()

  const logOut = useCallback(() => {
    dispatch(setUserAdmin(null))
  }, [userAmin])

  const setUserAdminData = useCallback((userData) => {
    if (userData?.userName === 'admin' && userData?.passWord === 'admin') {
      dispatch(setUserAdmin(userData))
    } else {
      showNotificationError('Error User name or password')
    }
  }, [userAmin, dispatch])

  return {
    isLogin: !!userAmin,
    userAmin,
    logOut,
    setUserAdmin: setUserAdminData
  }
}

export default useAccountAdmin
