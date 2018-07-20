import React, { Component } from 'react';
import {
  Button
 } from 'reactstrap';

class DarkMode extends Component {  
  constructor(props) {  
    super(props);
    this.css = `  
    html { filter: invert(100%); background: #fefefe; }  
    * { background-color: inherit }
    img:not([src*=".svg"]), video { filter: invert(100%) }`;
 
    this.state = {
       active: 'false'
    };
 }
    isActive = () => this.state.active === true;

    toggle = () => {
      this.setState({
        active: !this.isActive()
      });
    }
  render() {
    return (  
      <div>
        <Button 
        style={{ background:"white", border: "1px solid black", color: "Black"}}
        aria-pressed={this.isActive()} onClick={this.toggle}>
          <span aria-hidden="true">{this.isActive() ? 'Dark' : 'Light'}</span>
        </Button>
        <style media={this.isActive() ? 'screen' : 'none'}>
          {this.css}
        </style>
      </div>
    );
  }
}

export default DarkMode;  