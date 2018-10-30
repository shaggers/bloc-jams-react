import React, { Component } from 'react';

class SongControls extends Component {

	renderIcon() {
		console.log(this.props.currentSongIndex);
		if (this.props.isPlaying === false) {
			return (
				<span className="ion-play"><i className="icon ion-md-play"></i></span>
			)
		} else if (this.props.isPlaying) {
			return (
				<span className="ion-pause"><i className="icon ion-md-pause"></i></span>
				)
		} else if (this.props.hoverItem !== this.props.currentSongIndex && this.props.isPlaying === true) {
			return (
				<span className="ion-play"><i className="icon ion-md-play"></i></span>
			);
		} else {
			return (
				<span className="ion-pause"><i className="icon ion-md-pause"></i></span>
			);
		}
	}

	render() {
		return (
			<div>{ this.renderIcon() }</div>
		)
	}
}

export default SongControls;