import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";

const FormComponent = ({
  formData,
  setFormData,
  handleSubmit,
  canSubmit = false,
  buttonText = "Submit",
}) => {
  const handleChange = event => {
    const keyName = event.target.name;
    setFormData({ ...formData, [keyName]: event.target.value });
  };

  const camelToTitleCase = text => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const keys = Object.keys(formData);

  return (
    <Formik initialValues={formData} onSubmit={handleSubmit}>
      <Form>
        {keys.map(key => {
          return (
            <FormGroup>
              <Label htmlFor={key} style={{ color: "whitesmoke" }}>
                {camelToTitleCase(key)}
              </Label>
              <Field name={key} onKeyUp={handleChange} />
            </FormGroup>
          );
        })}
        {canSubmit && (
          <Button type='submit' color='primary'>
            {buttonText}
          </Button>
        )}
      </Form>
    </Formik>
  );
};

export default FormComponent;
