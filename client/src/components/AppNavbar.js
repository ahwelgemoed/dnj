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
  // <NavbarBrand href="http://klyntji.com/">Home </NavbarBrand>
  // <NavbarBrand href="http://klyntji.com/">KLYNTJI</NavbarBrand>

  render() {
    
    return(
      <div>
      <Navbar dark expand="lg" className="mb-5">
      <Container>
     
      <NavbarBrand href="/"><img className='logo' src="logo.png"/> </NavbarBrand>

      <a exact href="http://klyntji.com/" activeClassName='nav-link-acc' className='nav-link'>
      <img className='klyn' src="klyn.png"/>
      </a>

      </Container>
      </Navbar>
    </div>
    );
  }
};

export default AppNavbar ;


// <div>
// <Navbar
//   expand="lg" 
//   className="mb-5">
//       <NavbarBrand className={this.state.isOpen} href="/"><i className='disnetjy'>"DIS NET JY"</i><b><h6 className="subb">- NP Van Wyk Louw</h6></b></NavbarBrand>
//       <DarkMode/>
//       <NavbarToggler onClick={this.toggle} className="mr-2" />
//       <Collapse isOpen={!this.state.isOpen} navbar>
//       <Nav navbar>
//         <NavItem>
//           <NavLink href="/components/">Components</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//         </NavItem>
//       </Nav>
//     </Collapse>
 
// </Navbar>
// </div>