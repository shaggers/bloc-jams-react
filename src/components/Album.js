import React, { Component } from 'react';
import albumData from './../data/albums';
import SongControls from './SongControls';

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
			hover: false,
			hoverItem: album.songs,
			currentSongIndex: 0,
			rowIndex: 0
		};

		this.audioElement = document.createElement('audio');
		this.audioElement.src = album.songs[0].audioSrc;

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

			const getIndex = () => {
				const album = albumData.find(album => {
					return album.slug === this.props.match.params.slug
				});
				for (var i = 0; i < album.songs.length; i++) {
					if ( album.songs[i].title === song.title ) {
						this.setState({ currentSongIndex: i });
					}
				}
			}
		 getIndex();	
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

	mouseEnter(index) {
		this.setState({ hover: true }); 
		this.setHoverItem(index);
		console.log('entered');
	}

	mouseLeave() {
		this.setState({ hover: false });
		this.setState({ hoverItem: null })
		console.log('left');
	}

	setHoverItem(index) {
		this.setState({ hoverItem: index })
		console.log('set song');
	}

	getRowIndex(row) {
		const album = albumData.find(album => {
			return album.slug === this.props.match.params.slug
		});
		for (var i = 0; i < album.songs.length; i++) {
			if (album.songs[i].title === row.title) {
				this.setState({ rowIndex: i });
				return i;
			}
		}
	}
	

		render() {
		return (
			<section className="album">
				<section id="album-info">
					<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
					<div className="album-details">
						<h1 id="album-title">{this.state.album.title}</h1>
						<h2 className="artist">{this.state.album.artist}</h2>
						<div id="release-info">{this.state.album.releaseInfo}</div>
					</div>
				</section> 
				<table id="song-list">
					
						<colgroup>
							<col id="song-number-column" />
							<col id="song-title-column" />
							<col id="song-duration-column" />
						</colgroup>

	

					<tbody>
						{
							this.state.album.songs.map((song, index) =>
								<tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.mouseEnter(index)} onMouseLeave={() => this.mouseLeave()}>
									<td>
										
										{this.state.hoverItem === index || this.state.currentSong === song ?
											<SongControls
												isPlaying={this.state.isPlaying}
												hoverItem={this.state.hoverItem}
												currentSong={this.state.currentSong}
												hover={this.state.hover}
												currentSongIndex={this.state.currentSongIndex}
												currentRowIndex={index}
											/>
											: index + 1
										}
									</td>					
									<td>{song.title}</td>
									<td>{song.duration}</td>
								</tr>
								)
						}
					</tbody>
				</table>
			</section>
		);
	}
}

export default Album;