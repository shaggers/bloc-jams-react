import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './styles/app.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBzz57A6_Ft7IcAU3sL35Wd8MjRAIB_hmA",
  authDomain: "bloc-jams-react-c54c1.firebaseapp.com",
  databaseURL: "https://bloc-jams-react-c54c1.firebaseio.com",
  projectId: "bloc-jams-react-c54c1",
  storageBucket: "bloc-jams-react-c54c1.appspot.com",
  messagingSenderId: "742487839530",
  appId: "1:742487839530:web:01c412de66ae7521"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
			<header>
				<div className="ui yellow top fixed inverted menu">
					<div className="item nav">
						<Link className="ui inverted brown button" to='/'>Landing</Link>
					</div>
					<div className="item nav">
						<Link className="ui inverted brown button" to='/library'>Library</Link>		
					</div>
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
