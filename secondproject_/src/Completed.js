import React, { Component } from 'react';
import './Completed.css';

class Completed extends Component {
    constructor(props){
        super(props);

       
    }

    

    render(){
        return (
            <div className={this.check ? ' text-red' : ' text-gray'}>
               { this.check == true ?  <div>
                   <span className="App-content-checked">
                       <i className= "fa fa-check-square-o fa-2x" aria-hidden="true"></i>
                   </span>
                   <span className="App-content-checked">
                       Не выбранные. Для выбора (clickmy)
                   </span>
                </div>
                 :
                <div>
                   <span className="App-content-checked">
                       <i className= "fa fa-square-o  fa-2x" aria-hidden="true"></i>
                   </span>
                   <span className="App-content-checked">
                       Не выбранные. Для выбора (clickmy)
                   </span>
                </div>}
            </div>
        );
    }
}

export default Completed;