import React, { Component } from 'react';

class SongControls extends Component {



	render() {
		return (
			<div>
				{console.log(this.props.currentRowIndex)}
				{this.key === this.props.currentSongIndex && this.props.isPlaying &&
					<span><p>pause</p></span>
				}
				{this.key === this.props.currentSongIndex && !this.props.isPlaying &&
					<span><p>play</p></span>
				}
				{ this.props.isPlaying && this.props.hoverItem !== this.props.currentSongIndex &&
					<span className="ion-play"><i className="icon ion-md-play"></i></span>
				}
				{ this.props.isPlaying && this.props.hoverItem === this.props.currentSongIndex &&
					<span className="ion-pause"><i className="icon ion-md-pause"></i></span>
				}				
			</div>
		)
	}
}

export default SongControls;