import React from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <NavbarBrand className='disnetjy' href="/"><b><i>"Dis net Jy"</i></b> - <h6>NP Van Wyk Louw</h6></NavbarBrand>
            </Container>
        </Navbar>
      </div>
    );
  }
};

export default AppNavbar ;