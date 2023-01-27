import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import FormComponent from "../features/FormComponent";
import Header from "../components/Header";

const CheckoutPage = () => {
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [showShippingForm, setShowShippingForm] = useState(false);

  return (
    <>
      <Header header='Checkout Page' />
      <Container>
        <Row>
          <Col>
            <FormComponent
              formData={billingAddress}
              setFormData={setBillingAddress}
            />
          </Col>
          <Col>
            {showShippingForm && (
              <FormComponent
                formData={shippingAddress}
                handleChange={setShippingAddress}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Button
            onClick={() => {
              setShowShippingForm(true);
            }}
          >
            Use different shipping address
          </Button>
          <Button
            onClick={() => {
              setShippingAddress(billingAddress);
              setShowShippingForm(true);
            }}
          >
            Use billing as shipping address
          </Button>
        </Row>
      </Container>

      <hr />
    </>
  );
};

export default CheckoutPage;
