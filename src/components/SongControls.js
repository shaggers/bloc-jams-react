import React, { Component } from 'react';

class SongControls extends Component {


	render() {
		return (
			<section className="song-controls" key={this.props.index}>
				{this.props.isPlaying ?
					<span className="ion-pause"><i className="icon ion-md-pause"></i></span>
				  : <span className="ion-play"><i className="icon ion-md-play"></i></span>
				}
			</section>
		);
	}
}

export default SongControls;