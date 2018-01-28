import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';


class Header extends Component{
	
// static propTypes = {
	// items: PropTypes.array.isRequired
// };
	render(){
		return (
	        <header className="App-header">
			
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				<div className="App-header-content">
					My first React Application
				</div>
			</header>
		);
	}
}


export default Header;