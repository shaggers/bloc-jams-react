import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../styles/library.css'

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}

	render() {
		return (
			<section className='library'>
			<div className="ui two stackable cards">
				{
					this.state.albums.map((album, index) =>
						<div id="albumcard" className="ui card">
							<Link to={`/album/${album.slug}`} key={index}>
							<div className="image">
								<img id="albumcover" src={album.albumCover} alt={album.title} />
							</div>
							<div id="albumcontent" className="content">
								<div><h3 className="ui header">{album.title}</h3></div>
								<div><h5 className="ui header">{album.artist}</h5></div>
								<div>{album.songs.length} songs</div>
							</div>
						</Link>
						</div>
					)
				}
			</div>
			</section>
		);
	}
}

export default Library;