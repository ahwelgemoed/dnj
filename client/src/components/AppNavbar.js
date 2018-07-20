import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,Button
 } from 'reactstrap';
 import DarkMode from './DarkMode';


class AppNavbar extends React.Component{
    state = {
      isOpen: false,
      mode: ''
    }
    toggle = () => {
      // console.log('cocked')
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

  render() {
    
    return(
      <div>
        <Navbar
          expand="lg" 
          className="mb-5">
            <Container>
              <NavbarBrand className={this.state.isOpen} href="/"><i className='disnetjy'>"DIS NET JY"</i><b><h6 className="subb">- NP Van Wyk Louw</h6></b></NavbarBrand>
              <DarkMode/>
              </Container>

        </Navbar>
      </div>
    );
  }
};

export default AppNavbar ;