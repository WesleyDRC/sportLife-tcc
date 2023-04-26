import BarTop from './components/BarTop'
import NavBar from './components/NavBar'

import { useEffect } from 'react'

import useCart from '../../../hooks/useCart'
import useAuth from '../../../hooks/useAuth'

export default function Header () {
  const { getCartUser, openCart} = useCart()
  const { authenticated } = useAuth()

  useEffect(() => {
    if (authenticated) {
      async function fetchData () {
        await getCartUser()
      }
      fetchData()
    }
  }, [authenticated, openCart])

  return (
    <header>
      <BarTop />
      <NavBar />
    </header>
  )
}
