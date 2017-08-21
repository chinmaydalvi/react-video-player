// NPM Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing Created Modules
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAPuPEJqh_gqHnA8KBTDZk0WSSrHxiDxOI';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

// Create New component this component can produce HTML

class App extends Component{
	render() {
		return (
			<div>
				<SearchBar/>
			</div>
		);
	}
}

// Take th component generated HTML and put it on the Page means in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));










