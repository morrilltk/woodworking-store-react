import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeCartItemQuantity, removeCartItem } from "./cartSlice";

const CartDropdownItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCartItem(item));
  };
  const handleChangeQuantity = quantity => {
    console.log(quantity);
    dispatch(changeCartItemQuantity({ ...item, quantity: quantity }));
  };
  return (
    <div className='cart-dropdown-item-content'>
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
            <span className='cart-dropdown-item-info'>
              {item.title}
              <span>
                <FontAwesomeIcon
                  onClick={handleDelete}
                  className='me-1 cart-dropdown-item-delete'
                  icon={faXmark}
                  size='xs'
                />
              </span>
            </span>
          </Row>
          <Row>
            <span className='cart-dropdown-item-info-small'>
              Qty:{" "}
              <>
                <input
                  style={{ fontSize: "12px" }}
                  className='product-detail-modal-quantity'
                  value={parseInt(item.quantity)}
                  onChange={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleChangeQuantity(parseInt(event.target.value));
                  }}
                  type='number'
                  min={0}
                  max={20}
                  step={1}
                />
              </>
              <span className='cart-dropdown-item-price'>
                ${item.price.toFixed(2)}
              </span>
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartDropdownItem;
