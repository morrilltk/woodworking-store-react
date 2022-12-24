import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const ProductCard = ({ product }) => {
  return (
    <Col xs='3'>
      <Card className='product-card__content' tag={"div"}>
        <img
          className='product-card-image'
          alt='Sample'
          src='https://picsum.photos/300/200'
        />
        <CardBody>
          <Row>
            <Col>
              <CardTitle tag='h5'>Card title</CardTitle>
            </Col>
            <Col>$50</Col>
          </Row>

          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            Card subtitle
          </CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
