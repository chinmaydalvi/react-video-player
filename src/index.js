// NPM Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Created Modules
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAPuPEJqh_gqHnA8KBTDZk0WSSrHxiDxOI';

// Create New component this component can produce HTML

const App = () => {
	return (
						<div>
						<SearchBar/>
						</div>
				 )
}

// Take th component generated HTML and put it on the Page means in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));










