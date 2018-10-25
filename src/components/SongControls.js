import React, { Component } from 'react';

class SongControls extends Component {

	renderIcon(song){
		if (this.props.currentSong === song && this.props.isPlaying) {
			return (
				<span className="ion-pause"><i className="icon ion-md-pause"></i></span>
			);
		} else {
			return (
				<span className="ion-play"><i className="icon ion-md-play"></i></span>
			);
		}
	}

	render() {
		return (
			{ this.renderIcon(song) }
		)
	}
}

export default SongControls;