import React, { Component } from 'react';

 // ****************************Ways to return JSX**************************************

// By using Method based components

// const SearchBar = () =>{
// 	return <input/>;
// }

// const foo = 5;


                                     // OR

// By using class Based components

class SearchBar extends Component{
	constructor(props){
			super(props);

			this.state = { term: ''}
	}

	// render method is use to return JSX
	render(){
			return (
				<div>
					<input 
						value = { this.state.term }
						onChange={ (event) => this.setState({ term: event.target.value })}
					/>
					Input { this.state.term }
				</div>
			);
	}
}


export default SearchBar;

