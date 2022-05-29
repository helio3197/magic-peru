import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImage from '../../assets/contact-placeholder.png';

const Contact = ({ id }) => {
  const [inputVal, setInputVal] = useState({
    name: '', email: '', phone: '', message: '',
  });

  return (
    <Container as="section" className="my-5" id={id}>
      <Row xs="1" sm="2">
        <Col className="d-flex flex-column justify-content-center order-last order-sm-first">
          <h2 className="text-center">
            Comuniquese con nosotros...
          </h2>
          <Form
            action="https://formspree.io/f/xeqnvpja"
            method="POST"
          >
            <Row>
              <Col xs="12" xl="6">
                <Form.Group
                  controlId="name"
                  className="flex-grow-1 py-2"
                >
                  <Form.Label visuallyHidden>
                    Nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    required
                    value={inputVal.name}
                    onChange={(e) => setInputVal((state) => ({
                      ...state,
                      name: e.target.value,
                    }))}
                  />
                </Form.Group>
              </Col>
              <Col xs="12" xl="6">
                <Form.Group
                  controlId="phone"
                  className="flex-grow-1 py-2"
                >
                  <Form.Label visuallyHidden>
                    Teléfono
                  </Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Número de teléfono"
                    name="phone"
                    required
                    value={inputVal.phone}
                    onChange={(e) => setInputVal((state) => ({
                      ...state,
                      phone: e.target.value,
                    }))}
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group
                  controlId="email"
                  className="flex-grow-1 py-2"
                >
                  <Form.Label visuallyHidden>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email (Opcional)"
                    name="email"
                    value={inputVal.email}
                    onChange={(e) => setInputVal((state) => ({
                      ...state,
                      email: e.target.value,
                    }))}
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group
                  controlId="message"
                  className="flex-grow-1 py-2"
                >
                  <Form.Label visuallyHidden>
                    Mensaje
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Mensaje"
                    required
                    name="message"
                    value={inputVal.message}
                    onChange={(e) => setInputVal((state) => ({
                      ...state,
                      message: e.target.value,
                    }))}
                  />
                </Form.Group>
              </Col>
              <Col xs="12" className="d-flex align-items-center">
                <Button type="submit" className="px-4">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className="py-4">
          <img src={contactImage} alt="contact" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
};

Contact.defaultProps = {
  id: undefined,
};

export default Contact;
