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
    <Col className='align-items-stretch' sm='6' md='4' lg='3'>
      <Card className='product-card__content' tag={"div"}>
        <img
          className='product-card-image'
          alt={product.title}
          src={product.imagePath}
        />

        <CardBody>
          <Row>
            <Col xs='9'>
              <CardTitle
                tag='h6'
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {product.title}
              </CardTitle>
            </Col>
            <Col xs='3'>
              <span className='product-card-cost'>
                ${product.price.toFixed(2)}
              </span>
            </Col>
          </Row>

          <CardSubtitle
            className='mb-2 text-muted'
            tag='h6'
            style={{ minHeight: "38.4px" }}
          >
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
