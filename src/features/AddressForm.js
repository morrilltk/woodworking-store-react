import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";

const AddressForm = ({
  address,
  canSubmit = false,
  handleSubmit = data => {
    console.log("submit not implemented", data);
  },
  handleChange = event => {
    console.log(
      "change not implemented",
      event.target.value,
      event.target.name
    );
  },
}) => {
  return (
    <>
      <Formik initialValues={address} onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <Label htmlFor='firstName'>First Name</Label>
            <Field name='firstName' onKeyUp={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='lastName'>Last Name</Label>
            <Field name='lastName' onKeyUp={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='address'>Address</Label>
            <Field name='address' onKeyUp={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='city'>City</Label>
            <Field name='city' onKeyUp={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='state'>State</Label>
            <Field name='state' onKeyUp={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='zipcode'>Zipcode</Label>
            <Field name='zipcode' onKeyUp={handleChange} />
          </FormGroup>
          {canSubmit && (
            <Button type='submit' color='primary'>
              Submit
            </Button>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default AddressForm;
