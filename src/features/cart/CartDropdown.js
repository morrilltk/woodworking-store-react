import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Button,
  Col,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { useState } from "react";
import CartDropdownItem from "./CartDropdownItem";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "./cartSlice";

const CartDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItems = useSelector(selectAllCartItems);

  const calculateCartQuantity = cartItems => {
    const total = cartItems.reduce((acc, item) => {
      return acc + parseInt(item.quantity);
    }, 0);
    return total;
  };

  const calculateCartPrice = cartItems => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * parseInt(item.quantity);
    }, 0);
    return total;
  };

  const cartQuantity = calculateCartQuantity(cartItems);
  const cartPrice = calculateCartPrice(cartItems);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
    >
      <DropdownToggle className='cart-dropdown-toggle' tag='div'>
        <FontAwesomeIcon className='me-1' icon={faCartShopping} />
        Cart <Badge pill={true}>{cartQuantity}</Badge>
      </DropdownToggle>
      <DropdownMenu className='cart-dropdown-menu'>
        <div className='cart-dropdown-menu-carat'></div>
        <Container className='cart-dropdown-header'>
          <Row>
            <Col xs='4'>
              <FontAwesomeIcon className='me-1' icon={faCartShopping} />
              <Badge pill={true}>{cartQuantity}</Badge>
            </Col>
            <Col xs='8'>
              <span className='cart-dropdown-header-price'>
                Total Price:{" "}
                <span className='cart-dropdown-header-price-value'>
                  ${cartPrice.toFixed(2)}
                </span>
              </span>
            </Col>
          </Row>
        </Container>

        <div className='cart-dropdown-item'>
          {cartItems.map(item => {
            return <CartDropdownItem key={item.id} item={item} />;
          })}
        </div>

        <Button className='cart-dropdown-checkout-button'>Checkout</Button>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CartDropdown;
