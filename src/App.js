import React, { useEffect, useState } from 'react';
import './App.css';
import Coin from './Coin';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
			.then(response => response.json())
			.then(responseData => {
				console.log(responseData);
				setCoins(responseData);
			})
			.catch(error => alert(error.message));
	}, []);

	const handleChange = e => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	// search filtered data
	const filteredCoins = coins.filter(coin => {
		// match the search input to the data
		// lowercase for consistency
		return coin.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<>
			<div className='coin-app'>
				<div className='coin-search'>
					<h1 className='coin-text'>Search a currency</h1>
					<form>
						<input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
					</form>
				</div>
				{filteredCoins.map(coin => (
					<Coin key={coin.id} image={coin.image} name={coin.name} symbol={coin.symbol} price={coin.current_price} volume={coin.market_cap} />
				))}
			</div>
		</>
	);
}

export default App;
