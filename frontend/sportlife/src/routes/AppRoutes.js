import {creatRoot} from 'react-router-dom'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import Login from '../pages/Login'
import Register from '../pages/Register'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import PersonalDataPage from '../pages/PersonalDataPage'
import AddressPage from '../pages/AddressPage'
import RequestPage from '../pages/RequestPage'
import Exit from '../pages/ExitPage'
import ExitPage from '../pages/ExitPage'
import FormPage from '../pages/FormPage'

export default function Routes() {

	const Private = ({ children }) => {
	const { authenticated, loading } = useAuth()

	if(loading) {
			return <div className='loading'> Carregando..... </div>
	}
	if (!authenticated) {
		return <Navigate to="/" />;
	}
	return children;
}

	const router = createBrowserRouter([
			{
					path: '/login',
					element: <Login />,
					errorElement: <ErrorPage />
			},

			{
				path: '/register',
				element: <Register />,
				errorElement: <ErrorPage />
			},

			{
				path: '/',
				element: <Home />,
				errorElement: <ErrorPage />
			},

			{
				path: '/product',
				element: <ProductPage />,
				errorElement: <ErrorPage />
			},

			{
				path: '/personaldata',
				element:  <PersonalDataPage />,
				errorElement: <ErrorPage />
			},

			{
				path: '/address',
				element: <Private> <AddressPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/request',
				element: <Private> <RequestPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/exit',
				element: <Private> <ExitPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/form',
				element: <FormPage />,
				errorElement: <ErrorPage />
			},
	])

	return (
			<RouterProvider router={router}/>
	)
}
