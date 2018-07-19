import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container
 } from 'reactstrap';


class AppNavbar extends React.Component{
    state = {
      isOpen: false
    }
    toggle = () => {
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
              <NavbarBrand  href="/"><i className='disnetjy'>"DIS NET JY"</i><b><h6 className="subb">- NP Van Wyk Louw</h6></b></NavbarBrand>
            </Container>
        </Navbar>
      </div>
    );
  }
};

export default AppNavbar ;