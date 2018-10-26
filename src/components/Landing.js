import React, { Component } from 'react';
import '../styles/landing.css'

const Landing = () => (
	<section className='landing'>
		<h1 id="landingtitle" className='ui header'>Turn the music up!</h1>

	<div id="cardcontainer" className="ui stackable three column grid">
			<div className="column landing">
				<h2 className='ui header'>Choose your music</h2>
				<p className='point-description'>The world is full of awesome music; why should you have to listen to music that someone else chose?</p>
			</div>
			<div className="column landing">
				<h2 className='ui header'>Unlimited streaming ad-free</h2>
				<p className='point-description'>No arbitrary limits. No distractions.</p>
			</div>
			<div className="column landing">
				<h2 className='ui header'>Mobile enabled</h2>
				<p className='class-description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
			</div>
	</div>
	</section>
);

export default Landing;