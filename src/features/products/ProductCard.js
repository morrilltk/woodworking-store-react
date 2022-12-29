import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const ProductCard = ({ product, handleProductClick }) => {
  return (
    <Col xs='3'>
      <Card className='product-card__content' tag={"div"}>
        <img
          className='product-card-image'
          alt={product.title}
          src={product.imagePath}
        />
        <CardBody>
          <Row>
            <Col>
              <CardTitle tag='h5'>{product.title}</CardTitle>
            </Col>
            <Col>
              <span className='product-card-cost'>
                ${product.price.toFixed(2)}
              </span>
            </Col>
          </Row>

          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            {product.desc}
          </CardSubtitle>
          <hr />
          <Button
            onClick={() => handleProductClick(product.id)}
            className='product-card-button'
          >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
