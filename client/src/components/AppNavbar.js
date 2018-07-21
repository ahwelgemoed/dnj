import React from 'react';
import { Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink 
 } from 'reactstrap';
 import DarkMode from './DarkMode';

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
      <Navbar light expand="lg" className="mb-5">
        <Container>
        <NavbarBrand className={this.state.isOpen} href="/"><i className='disnetjy'>"DIS NET JY"</i><b><h6 className="subb">- NP Van Wyk Louw</h6></b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href='what'>
              What?
            </NavLink>
          </NavItem>
              <NavItem>
                <NavLink>
                  <DarkMode/>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink href='terms'>
                T&C
              </NavLink>
            </NavItem>

            </Nav>
          </Collapse>
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