import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import '../styles/album.css' 


class Album extends Component {
	constructor(props) {
		super(props);

		const album = albumData.find(album => {
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album: album,
			currentSong: album.songs[0],
			isPlaying: false,
			currentTime: 0,
			duration: album.songs[0].duration,
			currentVolume: 0.8
		};

		this.audioElement = document.createElement('audio');
		this.audioElement.src = album.songs[0].audioSrc;
		}

		componentDidMount() {
			this.eventListeners = {
				timeupdate: e => {
					this.setState({ currentTime: this.audioElement.currentTime });
				},
				durationchange: e => {
					this.setState({ duration: this.audioElement.duration });
				},
				onvolumechange: e => {
					this.setState({ currentVolume: this.audioElement.volume });
				},
			};
			this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
			this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
			this.audioElement.addEventListener('onvolumechange', this.eventListeners.onvolumechange);
		}

		componentWillUnmount() {
			this.audioElement.src = null;
			this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
			this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
			this.audioElement.removeEventListener('onvolumechange', this.eventListeners.onvolumechange);
		}

		play() {
			this.audioElement.play();
			this.setState({ isPlaying: true });
		}

		pause() {
			this.audioElement.pause();
			this.setState({ isPlaying: false });
		}

		setSong(song) {
			this.audioElement.src = song.audioSrc;
			this.setState({ currentSong: song });
		}

		handleSongClick(song) {
			const isSameSong = this.state.currentSong === song;
			if (this.state.isPlaying && isSameSong) {
				this.pause();
			} else {
				if (!isSameSong) { this.setSong(song); }
				this.play();
			}
		}

		handlePrevClick() {
			const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
			const newIndex = Math.max(0, currentIndex - 1);
			const newSong = this.state.album.songs[newIndex];
			this.setSong(newSong);
			this.play();
		}

		handleNextClick() {
			const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
			const newIndex = Math.min( this.state.album.songs.length - 1, currentIndex + 1);
			const newSong = this.state.album.songs[newIndex];
			this.setSong(newSong);
			this.play();
		}

		handleTimeChange(e) {
			const newTime = this.audioElement.duration * e.target.value;
			this.audioElement.currentTime = newTime;
			this.setState({ currentTime: newTime });
		}

		handleVolumeBar(e) {
			const newVolume = e.target.value;
			this.audioElement.volume = newVolume;
			this.setState({ currentVolume: newVolume });
		}

		formatTime(time) {
			if (time > 0) {
				const minutes = Math.round(Math.floor(time / 60));
				const seconds = Math.round(time - minutes * 60);
					if (seconds < 10) {
						return minutes + " : " + "0" + seconds;
					} else {
						return minutes + " : " + seconds;
					}
			} else {
				return "- : --"
			}
		}

	render() {
		return (
			<div id="album" className="ui stackable two column grid">
				<div className="column albumcover">
				<div className="ui card albumcover">
					<section id="album-info">
						<div className="image">
						<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
						</div>
						<div className="content">
							<h2 id="album-title" className="albumcontent">{this.state.album.title}</h2>
							<h2 id="artist" className="albumcontent">{this.state.album.artist}</h2>
							<h3 id="release-info" className="albumcontent">{this.state.album.releaseInfo}</h3>
						</div>
					</section>
				</div>
				</div>
				<div className="column table">	
				<table className="ui celled unstackable table" id="song-list">
					<thead>
						<colgroup>
							<col id="song-number-column" />
							<col id="song-title-column" />
							<col id="song-duration-column" />
						</colgroup>

						<tr>
							<th>Song</th>
							<th>Title</th>
							<th>Length</th>
						</tr>

					</thead>
					<tbody>
						{
							this.state.album.songs.map( (song, index) =>
								<tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
									<td id="song">{index + 1}</td>
									<td id="title">{song.title}</td>
									<td id="duration">{song.duration}</td>
								</tr>
								)
						}
					</tbody>
				</table>
                </div>
				<PlayerBar
					isPlaying={this.state.isPlaying}
					currentSong={this.state.currentSong}
					currentTime={this.audioElement.currentTime}
					currentVolume={this.state.currentVolume}
					duration={this.audioElement.duration}
					handleSongClick={() => this.handleSongClick(this.state.currentSong)}
					handlePrevClick={() => this.handlePrevClick()}
					handleNextClick={() => this.handleNextClick()}
					handleTimeChange={(e) => this.handleTimeChange(e)}
					handleVolumeBar={(e) => this.handleVolumeBar(e)}
					formatTime={(time) => this.formatTime(time)}
				/>
			</div>
		);
	}
}

export default Album;