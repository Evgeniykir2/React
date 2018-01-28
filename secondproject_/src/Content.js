import React, { Component } from 'react';
import Completed from './Completed.js';
import './Content.css';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : "",
            todos: [],
            
        }
        this.saveItem = this.saveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.showAllItems = this.showAllItems.bind(this);
        this.showCompletedItems = this.showCompletedItems.bind(this);
        this.checkComplete = this.checkComplete.bind(this); 
    }

changeInput(ev){
    this.setState({inputValue: ev.target.value});
}
////////////////////////////////////////////////////
    saveItem(ev){
        if(this.state.inputValue =='') {
            return;
        }
        const item = {
            text: this.state.inputValue,
            id: Date.now(),
            active : false,
        }

        this.setState(prevState => ({
            todos: [...prevState.todos, item],
            inputValue: ''
        }));
        console.log(this.state.todos);
    }
/////////////////////////////////////////////
    deleteItem(id){
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id != id),
            inputValue : ''
        }));
    }
///////////////////////////////////////////////////
    showCompletedItems(e){
        
    }
///////////////////////////////////////////////////

    showAllItems(e){

    }
///////////////////////////////////////////////////
    checkComplete(id){
        this.setState((prevState) => ({ 
            todos: prevState.todos.map(todo => {todo.id == id ? !todo.active : todo.active })    
        }))
    }

    render(){
        return(
                <div className="App-content">
                        <div>
                            <input type="text" placeholder="Enter text" className="App-input" onChange={this.changeInput.bind(this)} />
                        </div>
                        <div>
                            <button className="App-content-button"
                                    onClick={this.saveItem}>Save
                            </button>
                            <button className="App-content-button"
                                    onClick={this.showAllItems}>Show All
                            </button>
                            <button className="App-content-button"
                                    onClick={this.showCompletedItems}>Completed
                            </button>
                        </div>
                        <div id="out" className="App-content-output">
                            {/*{this.state.inputValue}*/}
                            
                            {this.state.todos.length != 0 ? this.state.todos.map(item => (
                                <div className="App-content-item"  key={item.id}>
                                    <p>{item.text}</p>
                                    <button className="App-content-button"
                                            onClick={() => this.deleteItem(item.id)}>
                                             Delete item 
                                    </button>
                                    <Completed  onClick={() => this.checkComplete(item.id)} check={item.active} />
                                </div>
                            ))      : <p> Введите что - то </p>}
                        </div>
                
                </div>
            );
    }
}

export default Content;