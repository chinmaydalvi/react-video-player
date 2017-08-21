// NPM Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing Created Modules
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAPuPEJqh_gqHnA8KBTDZk0WSSrHxiDxOI';

// Create New component this component can produce HTML
class App extends Component{

	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
			 this.setState({ videos });  //SIMILAR to this.setState({ videos: videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

// Take th component generated HTML and put it on the Page means in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));










