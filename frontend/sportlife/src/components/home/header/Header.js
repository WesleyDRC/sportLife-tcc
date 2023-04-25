import BarTop from './components/BarTop';
import NavBar from './components/NavBar';

import { useEffect } from 'react';

import useCart from '../../../hooks/useCart';

export default function Header(){
	const { getCartUser, openCart,infosCart} = useCart();

	useEffect(() => {
		async function fetchData() {
			await getCartUser();
    }
    fetchData();
	},[openCart, infosCart])
	return(
		<header>
			<BarTop />
			<NavBar />
		</header>
	)
}
