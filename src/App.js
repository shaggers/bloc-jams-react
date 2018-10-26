import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			<header>
				<div className="ui top fixed menu">
						<Link className="item nav" to='/'>Landing</Link>
						<Link className="item nav" to='/library'>Library</Link>		
					<h1 className="ui header" id="navheader">
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
