import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import EmailConfirmationModal from "./EmailConfirmationModal";
import EmailFormModal from "./EmailFormModal";

const Footer = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleEmailFormSubmit = formData => {
    setConfirmationModalOpen(true);
    setEmailModalOpen(false);
    console.log(formData);
    // submit to email server here
  };
  return (
    <footer className='site-footer fixed-bottom'>
      <EmailFormModal
        isOpen={emailModalOpen}
        setModalOpen={setEmailModalOpen}
        submit={handleEmailFormSubmit}
      />
      <EmailConfirmationModal
        isOpen={confirmationModalOpen}
        setModalOpen={setConfirmationModalOpen}
      />

      <Container>
        <Row className='site-footer-row'>
          <Col className='text-center site-footer-links'>
            <h5>Links</h5>
            <Link to='/'>Home</Link>
            {" | "}
            <Link to='/products'>Products</Link>
            {" | "}
            <Link to='/about'>About</Link>
            {" | "}
            <Link to='/contact'>Contact</Link>
          </Col>

          <Col className='text-center'>
            <h5>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram'
              href='http://instagram.com/'
            >
              <i className='fa fa-instagram' />
            </a>{" "}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/'
            >
              <i className='fa fa-facebook' />
            </a>{" "}
            <a
              className='btn btn-social-icon btn-twitter'
              href='http://twitter.com/'
            >
              <i className='fa fa-twitter' />
            </a>{" "}
            <a
              className='btn btn-social-icon btn-google'
              href='http://youtube.com/'
            >
              <i className='fa fa-youtube' />
            </a>
          </Col>

          <Col className='text-center site-footer-links'>
            <h5>Email Us!</h5>
            <Link onClick={() => setEmailModalOpen(true)}>
              <i className='fa fa-envelope-o' /> morrilltk@gmail.com
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
