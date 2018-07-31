import React from 'react';
import { Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
 } from 'reactstrap';

 import {NavLink} from 'react-router-dom';

class AppNavbar extends React.Component{
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return(
      
      <div>
      <nav className="navbar navbar-expand main-nav">
    <div className="container justify-content-center">
        <ul className="nav navbar-nav flex-fill w-100 flex-nowrap">
        </ul>
        <ul className="nav navbar-nav flex-fill justify-content-center">
            <li className="nav-item"><a className="nav-link" href="#"><img className='logo ' src="logo.png"/> </a></li>
        </ul>
        <ul className="nav navbar-nav flex-fill w-100 justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="https://klyntji.com/"><img className='klyn' src="klyn.png"/></a>
            </li>
        </ul>
    </div>
</nav>
      </div>
    );
  }
};

export default AppNavbar ;