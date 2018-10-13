import React, { Component } from 'react';

class SongControls extends Component {
	render() {
		return (
			<section className="song-controls">
				{this.props.isPlaying ?
					<span className="ion-pause"><i class="icon ion-md-pause"></i></span>
				:	<span className="ion-play"><i class="icon ion-md-play"></i></span>
				}
			</section>
		);
	}
}

export default SongControls;