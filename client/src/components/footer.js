import React from 'react';
import { Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from 'reactstrap';
const footer = () => {


    const year = (new Date()).getFullYear()

  return (
    <div className="bott">

    <a href="https://www.instagram.com/ahwelgemoed"> &copy;   AH Welgemoed {year}</a>
     <img className='foot' src="Foot.png"/>
    <a href="/tandc">Terms and Conditions</a>
    </div>
  );
};

export default footer;
