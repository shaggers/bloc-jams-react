import React, { Component } from 'react';

class SongControls extends Component {



	render() {
		return (
			<div>
				{this.props.currentRowIndex === this.props.currentSongIndex && !this.props.isPlaying &&
					<span><i className="icon ion-md-play"></i></span>
				}
				{this.props.currentRowIndex === this.props.currentSongIndex && this.props.isPlaying &&
					<span><i className="icon ion-md-pause"></i></span>
				}
				{this.props.currentRowIndex === this.props.hoverItem && this.props.hoverItem !== this.props.currentSongIndex &&
					<span><i className="icon ion-md-play"></i></span>
				}					
			</div>
		)
	}
}

export default SongControls;