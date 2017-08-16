import React from 'react';
import ReactDOM from 'react-dom';

// Create New component this component can produce HTML

const App = () => {
	return <div>Hi</div>;
}

// Take th component generated HTML and put it on the Page means in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));










