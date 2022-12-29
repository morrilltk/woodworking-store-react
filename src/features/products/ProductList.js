import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import Header from "../../components/Header";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { selectAllProducts } from "./productsSlice";

const ProductList = () => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(undefined);

  const products = useSelector(selectAllProducts);

  const handleOpenProductModal = id => {
    console.log(id);
    console.log("clicked");
    setCurrentProductId(id);
    setProductModalOpen(true);
  };

  return (
    <>
      <Header header='Products List' />
      <ProductDetailModal
        id={currentProductId}
        isOpen={productModalOpen}
        setModalOpen={setProductModalOpen}
        handleAddToCart={id => {
          console.log("product modal clicked", id);
        }}
      />
      <Container>
        <Row className='app-product-list-row'>
          {products.map(product => {
            return (
              <ProductCard
                product={product}
                handleProductClick={handleOpenProductModal}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
