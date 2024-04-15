import { useSelector } from 'react-redux'

const useLanguage = () => {
  const { messages, local } = useSelector(state => state.app?.language)

  return {
    messages, local
  }
}

export default useLanguage
