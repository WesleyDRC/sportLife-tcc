import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import AxiosRepository from '../repository/AxiosRepository'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userToken = localStorage.getItem('user_token')

    if (userToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(userToken)}`
      setUser(JSON.parse(userToken))
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const SignIn = async (email, password) => {
    try {
      const response = await api.post('/auth', { email, password })

      localStorage.setItem('user_token', JSON.stringify(response.data.token))

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      setUser(response.data.token)
    } catch (error) {
      if (error.response.status !== error.response.status.ok) {
        return error.response.data.message
      }
    }
  }

  const SignUp = async (email, password, confirmPassword) => {
    try {
      const response = await AxiosRepository.createUser({
        email,
        password,
        confirmPassword
      })
    } catch (error) {
      if (error.response.status !== error.response.status.ok) {
        return error.response.data.message
      }
    }
  }

  const SignOut = () => {
    setUser(null)
    api.defaults.headers.Authorization = null
    localStorage.removeItem('user_token')
    window.location.href = "/"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn,
        authenticated: !!user,
        loading,
        SignUp,
        SignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
