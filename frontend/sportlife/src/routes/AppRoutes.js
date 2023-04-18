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
import ExitPage from '../pages/ExitPage'
import FormPage from '../pages/FormPage'
import CategoryPage from '../pages/Categorypage'
import FormAddress from '../pages/FormAddress'
import CreateAddress from '../pages/CreateAddress'
import ConFirmBuyPage from '../pages/ConFirmBuyPage'

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
				path: '/product/:id',
				element: <ProductPage />,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/personaldata',
				element: <Private> <PersonalDataPage /></Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/address',
				element: <Private> <AddressPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/request',
				element: <Private> <RequestPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/exit',
				element: <Private> <ExitPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/edit',
				element: <Private> <FormPage /> </Private>,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/createAddress',
				element: <CreateAddress />,
				errorElement: <ErrorPage />
			},

			{
				path: '/user/editAddress',
				element: <FormAddress />,
				errorElement: <ErrorPage />
			},

			{
				path: '/category',
				element: <CategoryPage />,
				errorElement: <ErrorPage />
			},

			{
				path: '/confirmbuy',
				element: <ConFirmBuyPage />,
				errorElement: <ErrorPage />
			},
	])

	return (
			<RouterProvider router={router}/>
	)
}
