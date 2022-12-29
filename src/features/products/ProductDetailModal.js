import { useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import ProductCard from "./ProductCard";
import { selectProductById } from "./productsSlice";

const ProductDetailModal = ({ isOpen, setModalOpen, handleAddToCart, id }) => {
  const product = useSelector(selectProductById(id));
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader
        toggle={() => {
          setModalOpen(false);
        }}
      ></ModalHeader>
      <ModalBody>
        <ProductCard product={product} />
        <Button
          onClick={() => {
            handleAddToCart(id);
          }}
        >
          Add to Cart
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default ProductDetailModal;
