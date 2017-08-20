import React from 'react';

 // ****************************Ways to return JSX**************************************

// By using Method based components

// const SearchBar = () =>{
// 	return <input/>;
// }

// const foo = 5;


                                     // OR

// By using class Based components

class SearchBar extends React.Component{
	// render method is use to return JSX
	render(){
			return <input/>;
	}
}


export default SearchBar;

