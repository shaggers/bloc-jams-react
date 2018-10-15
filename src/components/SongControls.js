import React, { Component } from 'react';

class SongControls extends Component {
	shouldComponentUpdate(nextProps, nextState) { 
		return this.props.song != nextProps.song;
	}

	mouseEnter(song) {
		this.setState({ currentSong: song });
		this.setState({ hover: true });
	}

	mouseLeave(song) {
		this.setState({ currentSong: song });
		this.setState({ hover: false });
	}

		mouseHandler(song) {
			const isSameSong = this.props.currentSong === song;
			if (this.state.hover && isSameSong) {
				this.mouseLeave(song);
			} else {
				this.mouseEnter(song);
			}
		}
	
	render() {
		return (
			<section className="song-controls">
				{this.props.song}
					<span className="ion-play"><i class="icon ion-md-play"></i></span>
				   <span className="ion-pause"><i class="icon ion-md-pause"></i></span>
			</section>
		);
	}
}

export default SongControls;