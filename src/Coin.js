import React from 'react';
import './Coin.css';

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
	return (
		<div className='coin-container'>
			<div className='coin'>
				<div className='coin-row'>
					<img src={image} alt='crypto' />
					<h1>{name}</h1>
					<p className='coin-symbol'>{symbol}</p>
				</div>
				<div className='coin-data'>
					<p className='coin-price'>£{price}</p>
					{/* toLocalString adds commas inbetween numbers */}
					<p className='coin-volume'>£{volume.toLocaleString()}</p>

					{priceChange < 0 ? (
						<p className='coin-percentage red'>{priceChange.toFixed(2)}%</p>
					) : (
						<p className='coin-percentage green'>{priceChange.toFixed(2)}%</p>
					)}
					<p className='coin-marketcap'>Mkt Cap: £{marketcap.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;
