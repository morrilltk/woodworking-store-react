import { Col, DropdownItem, Row } from "reactstrap";

const CartDropdownItem = ({ item }) => {
  return (
    <DropdownItem toggle={false}>
      <Row>
        <Col xs='4'>
          <img
            className='cart-dropdown-item-image'
            src={item.imagePath}
            alt='sample'
          />
        </Col>
        <Col xs='8'>
          <Row>
            <div className='cart-dropdown-item-title'>{item.title}</div>
          </Row>
          <Row>
            <span className='cart-dropdown-item-info'>
              Qty: {item.quantity}
              <span className='cart-dropdown-item-price'>
                ${item.price.toFixed(2)}
              </span>
            </span>
          </Row>
        </Col>
      </Row>
    </DropdownItem>
  );
};

export default CartDropdownItem;
