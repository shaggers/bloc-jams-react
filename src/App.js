import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './styles/album.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			<header>
				<div className="ui menu">
					<nav>
						<Link className="header item"  to='/'>Landing</Link>
						<Link className="item" to='/library'>Library</Link>
					</nav>
					<h1 className="ui purple header">
						<i className="music icon"></i>
						Bloc Jams
					</h1>
				</div>
              <main>
                    <Route exact path="/" component={Landing} />
					<Route path="/library" component={Library} />
					<Route path="/album/:slug" component={Album} />
              </main>
          </header>
      </div>
    );
  }
}

export default App;
