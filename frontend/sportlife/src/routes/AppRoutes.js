import {creatRoot} from 'react-router-dom'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'

export default function Routes() {

// 	const Private = ({ children }) => {
// 	const { authenticated, loading } = useAuth()

// 	if(loading) {
// 			return <div className='loading'> Carregando..... </div>
// 	}
// 	if (!authenticated) {
// 		return <Navigate to="/login" />;
// 	}
// 	return children;
// }

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
	])

	return (
			<RouterProvider router={router}/>
	)
}
