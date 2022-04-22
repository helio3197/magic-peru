import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImage from '../../assets/contact-placeholder.png';

const Contact = ({ id }) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <Container as="section" className="my-5" id={id}>
      <Row xs="1" sm="2">
        <Col className="d-flex flex-column justify-content-center order-last order-sm-first">
          <h2 className="text-center">
            Comuniquese con nosotros...
          </h2>
          <Form>
            <Row>
              <Form.Group
                as={({
                  children, className, xs, lg,
                }) => (
                  <Col className={className} xs={xs} lg={lg}>{children}</Col>
                )}
                controlId="placeholder"
                xs="12"
                lg="auto"
                className="flex-grow-1 py-3"
              >
                <Form.Label visuallyHidden>
                  placeholder
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Placeholder"
                  required
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </Form.Group>
              <Col xs="auto" className="d-flex align-items-center">
                <Button type="submit">
                  Primary Action
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
