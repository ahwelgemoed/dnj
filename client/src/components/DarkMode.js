import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

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
        // className='nav-link'
        style={{ marginBottom: "2rem", background:"white", border: "1px solid black", color: "Black"}}
        aria-pressed={this.isActive()} onClick={this.toggle}>
          <span aria-hidden="true">{this.isActive() ? <span className='fas fa-moon'> Dark</span> : <span className='fas fa-sun'> Light</span>}</span>
        </Button>
        <style media={this.isActive() ? 'screen' : 'none'}>
          {this.css}
        </style>
      </div>
    );
  }
}

export default DarkMode;  