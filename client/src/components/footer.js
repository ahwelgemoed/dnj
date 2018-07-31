import React from 'react';
import { Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from 'reactstrap';
const footer = () => {


    const year = (new Date()).getFullYear()

  return (
    <div className="bott">

    <a target="_blank" href="https://www.instagram.com/ahwelgemoed"> &copy;   AH Welgemoed {year}</a>
    <a  href="/tandc">Terms and Conditions</a>
    </div>
  );
};

//  <img className='foot' src="Foot.png"/>
export default footer;
