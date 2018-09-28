import React from 'react';

const Landing = () => (
	<section className='landing'>
		<h1 className='hero-title'>Turn the music up!</h1>

		<section className='selling-points'>
			<div className='point'>
				<h2 className='point-title'>Choose your music</h2>
				<p className='point-description'>The world is full of awesome music.</p>
			</div>
			<div className='point'>
				<h2 className='point-title'>Unlimited streaming ad-free</h2>
				<p className='point-description'>No arbitrary limits. No distractions.</p>
			</div>
			<div className='point'>
				<h2 className='class-title'>Mobile enabled</h2>
				<p className='class-description'>Listen to your music on the go</p>
			</div>
		</section>
	</section>
);

export default Landing;