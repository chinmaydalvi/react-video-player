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
	// render method is use to return JSX
	render(){
			return <input onChange={ (event) => console.log(event.target.value)}/>;
	}
}


export default SearchBar;

