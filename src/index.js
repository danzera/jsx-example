// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
	// variables and functions can be referenced within JSX using single curly braces { }
	// see return statement below
	const buttonText = 'Click Me!';
	function labelText() { return 'Enter name:' };

	return (
		<div>
  		<label className="label" htmlFor="name">{ labelText() }</label>
  		<input id="name" type="text" />
  		<button style={{ backgroundColor: 'blue', color: 'white'}}>
				{buttonText}
			</button>
		</div>
	);
}

// Use the React component to render content
ReactDOM.render(<App />, document.querySelector('#root'));
