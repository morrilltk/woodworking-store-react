import { Formik, Form, Field } from "formik";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const EmailFormModal = ({ isOpen, setModalOpen, submit }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={() => setModalOpen(false)}>Email Us!</ModalHeader>
      <ModalBody>
        <Formik initialValues={{ email: "", message: "" }} onSubmit={submit}>
          <Form
          // action='mailto: morrilltk@gmail.com'
          // method='POST'
          // enctype='mutlipart/form-data'
          // name='message'
          >
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Field
                name='email'
                placeholder='Your email'
                className='form-control'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='message'>Message</Label>
              <Field
                name='message'
                as='textarea'
                placeholder='Add your message here'
                rows='12'
                className='form-control'
              />
            </FormGroup>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </Form>
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default EmailFormModal;
