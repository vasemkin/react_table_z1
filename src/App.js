import React from 'react';
import './App.css';
import Content from './Content';
import _ from 'lodash';


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          load : false,
          check : true,
          json: "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
        };
      this.handleClick = this.handleClick.bind(this);
      this.loadConf = this.loadConf.bind(this);
    }
  
    handleClick() {
        this.state.check ? 
            this.setState(state => ({
                check : false,
                json : "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
            })) :
            this.setState(state => ({
                check : true,
                json: "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
            }));
    }
  
    loadConf(){
        this.setState({
            load : true
        });

    }

    
    render() {
      return (
          <div className="main">
            <p>choose data package and click load: </p>
            <button className="btn btn-primary selection" onClick={this.handleClick}>
              {this.state.check ? 'big data package' : 'small data package'}
            </button>
            <button className="btn btn-secondary selection"onClick={this.loadConf}>load</button>
            {
                this.state.load ? <Content data={this.state.json} /> : <div></div>
            }
            
          </div>
      );
    }
  }
  