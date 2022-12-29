import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import CartDropdown from "../features/cart/CartDropdown";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand='md' color='dark' dark container='fluid' sticky='top'>
      <NavbarBrand href='/'>Artisan Woodcrafts</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='me-auto' navbar>
          <NavItem>
            <NavLink className='app-navbar-text' to='/products'>
              Products
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText className='app-navbar-text me-5'>
          <CartDropdown />
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
