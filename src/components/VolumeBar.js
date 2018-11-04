import React, { Component } from 'react';

class VolumeBar extends Component {

	render() {
		return (
			<span>
				<div className='current-volume'>
					{this.props.currentVolume > 0 ?
						  <i class="icon ion-md-volume-high"></i>
						: <i class="icon ion-md-volume-off"></i>
					}
				</div>
			<input
				type="range"
				className="seek-bar"
				value={(this.props.currentVolume)}
				max="1"
				min="0"
				step="0.1"
				onChange={this.props.handleVolumeBar}
				/> 
			</span>
		)
	}

}

export default VolumeBar;


