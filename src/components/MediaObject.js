import { Col, Row } from "reactstrap";

const MediaObject = () => {
  return (
    <div>
      <Row>
        <Col sm='4'>
          <img
            className='media-object-image'
            src='https://picsum.photos/300/200'
            alt='sample'
          />
        </Col>
        <Col sm='8' className='media-object-body'>
          <div>
            <h5 className='mt-0'>Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MediaObject;
