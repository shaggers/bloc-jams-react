import React, { Component } from 'react';
import VolumeBar from './VolumeBar';

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
					<button id="next" onClick={this.props.handleNextClick}>
						<i class="icon ion-md-skip-forward"></i>
					</button>
				</section>
				<section id="time-control">
					<div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
					<input
						type="range"
						className="seek-bar"
						value={(this.props.currentTime / this.props.duration) || 0}
						max="1"
						min="0"
						step="0.01"
						onChange={this.props.handleTimeChange}
					/>
					<div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
				</section>
				<VolumeBar currentVolume={this.props.currentVolume} handleVolumeBar={(e) => this.props.handleVolumeBar(e)} />
			</section>
		);
	}
}

export default PlayerBar;
