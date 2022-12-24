import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const EmailConfirmationModal = ({ isOpen, setModalOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={() => setModalOpen(false)}>Email Sent!</ModalHeader>
      <ModalBody>
        <Button onClick={() => setModalOpen(false)} color='primary'>
          Ok
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default EmailConfirmationModal;
