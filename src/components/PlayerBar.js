import React, { Component } from 'react';

class PlayerBar extends Component {
	render() {
		return (
			<section className="player-bar">
				<section id="buttons">
					<button id="previous" onClick={this.props.handlePrevClick}>
						<i class="icon ion-md-skip-backward"></i>
					</button>
					<button id="play-pause" onClick={this.props.handleSongClick} >
						{this.props.isPlaying ?
							<i class="icon ion-md-pause"></i>
						:	<i class="icon ion-md-play"></i> }
					</button>
					<button id="next">
						<i class="icon ion-md-skip-forward"></i>
					</button>
				</section>
				<section id="time-control">
					<div className="current-time">–:––</div>
					<input type="range" className="seek-bar" value="0" />
					<div className="total-time">–:––</div>
				</section>
				<section id="volume-control">
					<div className="icon ion-volume-low"></div>
					<input type="range" className="seek-bar" value="80" />
					<div className="icon ion-volume-high"></div>
				</section>
			</section>
		);
	}
}

export default PlayerBar;
