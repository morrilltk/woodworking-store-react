import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import Header from "../../components/Header";
import { addProductToCart } from "../cart/cartSlice";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { selectAllProducts } from "./productsSlice";

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const [productModalOpen, setProductModalOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(products[0].id);

  const handleOpenProductModal = id => {
    console.log(id);
    console.log("clicked");
    setCurrentProductId(id);
    setProductModalOpen(true);
  };
  console.log({ products, id: products[0].id });
  return (
    <>
      <Header header='Products List' />
      {currentProductId && (
        <ProductDetailModal
          id={currentProductId}
          isOpen={productModalOpen}
          setModalOpen={setProductModalOpen}
          handleAddToCart={product => {
            console.log("product modal clicked", product);
            dispatch(addProductToCart(product));
          }}
        />
      )}
      <Container>
        <Row className='app-product-list-row'>
          {products.map(product => {
            return (
              <ProductCard
                key={product.id}
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
