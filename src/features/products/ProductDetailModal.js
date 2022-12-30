import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { selectProductById } from "./productsSlice";

const ProductDetailModal = ({ isOpen, setModalOpen, handleAddToCart, id }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const product = useSelector(selectProductById(id));

  const resetModal = () => {
    setProductQuantity(1);
    setModalOpen(false);
  };

  return (
    <Modal className='product-detail-modal' isOpen={isOpen}>
      <ModalHeader
        toggle={() => {
          resetModal();
        }}
      >
        Confirm Quantity
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <h5>{product.title}</h5>
          </Col>
          <Col>
            <span className='product-detail-modal-cost'>
              ${product.price.toFixed(2)}
            </span>
          </Col>
        </Row>
        <img
          className='product-detail-modal-image'
          alt={product.title}
          src={product.imagePath}
        />
        <h6>{product.desc}</h6>
        <Row>
          <Col>
            <Row>
              <Col>
                <Input
                  className='product-detail-modal-quantity'
                  value={parseInt(productQuantity)}
                  onChange={event =>
                    setProductQuantity(parseInt(event.target.value))
                  }
                  type='number'
                  min={1}
                  max={20}
                  step={1}
                />
              </Col>
              <Col>
                <span className='product-detail-modal-total'>
                  <label>Total</label>$
                  {(product.price * productQuantity).toFixed(2)}
                </span>
              </Col>
            </Row>
          </Col>

          <Col xs='5'>
            <Button
              className='product-detail-modal-add-button'
              onClick={() => {
                console.log({ ...product, quantity: productQuantity });
                handleAddToCart({ ...product, quantity: productQuantity });
                resetModal();
              }}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ProductDetailModal;
