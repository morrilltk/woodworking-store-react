import { Container, Row } from "reactstrap";
import Header from "./Header";
import ProductCard from "./ProductCard";
const products = [
  {
    title: "test 1",
    desc: "desc 1",
    cost: 100,
    imagePath: "../img/walnut.png",
  },
  {
    title: "test 2",
    desc: "desc 2",
    cost: 50,
    imagePath: "../img/purple-heart.jpg",
  },
  {
    title: "test 3",
    desc: "desc 3",
    cost: 25,
    imagePath: "../img/walnut.png",
  },
  {
    title: "test 4",
    desc: "desc 4",
    cost: 60,
    imagePath: "../img/purple-heart.jpg",
  },
  {
    title: "test 5",
    desc: "desc 5",
    cost: 100,
    imagePath: "../img/walnut.png",
  },
  {
    title: "test 6",
    desc: "desc 6",
    cost: 50,
    imagePath: "../img/purple-heart.jpg",
  },
];

const ProductList = () => {
  return (
    <>
      <Header header='Products List' />
      <Container>
        <Row className='app-product-list-row'>
          {products.map(product => {
            return <ProductCard product={product} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
