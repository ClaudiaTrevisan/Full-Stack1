import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeed, goToLogin } from '../router/Coordinator'

export const useProtectedPage = () => {
  const history = useHistory()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLogin(history)
    }
  }, [history])
}

export const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
      const token = localStorage.getItem('token')
      if (token){
        goToFeed(history)
      }
    }, [history])
}