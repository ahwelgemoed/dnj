import React from 'react';
import { Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from 'reactstrap';
const footer = () => {


    const year = (new Date()).getFullYear()

  return (
    <div className="bott">

    <a href="https://github.com/ahwelgemoed"> &copy;   AH Welgemoed {year}</a>
    <div className="lds-heart"><div></div></div>
    <a href="/tandc">Terms and Conditions</a>
    </div>
  );
};

export default footer;
