import React from 'react';

const Coin = ({ image, name, symbol, price, volume }) => {
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
					<p className='coin-volume'>£{volume.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;