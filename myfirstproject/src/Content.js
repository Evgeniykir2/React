import React, { Component } from 'react';
import './Content.css';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : ""
        }
    }

changeInput(ev){
    this.setState({inputValue: ev.target.value});
}

    render(){
        return(
                <div className="App-content">
                        <div>
                            <input type="text" placeholder="Enter text" className="App-input" onChange={this.changeInput.bind(this)} />
                        </div>
                        <div>
                            <button className="App-content-button">Save</button>
                        </div>
                        <div id="out" className="App-content-output">
                            {this.state.inputValue}
                        </div>
                
                </div>
            );
    }
}

export default Content;