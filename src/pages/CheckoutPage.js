import { useState } from "react";
import { Button } from "reactstrap";
import AddressForm from "../features/AddressForm";
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

  const handleBillingChange = event => {
    const keyName = event.target.name;
    setBillingAddress({ ...billingAddress, [keyName]: event.target.value });
    console.log(
      "BILLING",
      event.target.value,
      event.target.name,
      billingAddress
    );
  };

  const handleShippingChange = event => {
    const keyName = event.target.name;
    setShippingAddress({ ...shippingAddress, [keyName]: event.target.value });
    console.log(
      "SHIPPING",
      event.target.value,
      event.target.name,
      shippingAddress
    );
  };

  return (
    <>
      <Header header='Checkout Page' />
      <AddressForm
        address={billingAddress}
        handleChange={handleBillingChange}
      />
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
      <hr />
      {showShippingForm && (
        <AddressForm
          address={shippingAddress}
          handleChange={handleShippingChange}
        />
      )}
    </>
  );
};

export default CheckoutPage;
