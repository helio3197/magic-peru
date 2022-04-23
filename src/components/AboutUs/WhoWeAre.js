import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import aboutUsImg from '../../assets/about-us-placeholder.png';
import { toLink } from '../../utils';

const WhoWeAre = () => (
  <Container as="section" className="section-margin">
    <Row>
      <Col xs="12" md="7" className="d-flex align-items-center">
        <img src={aboutUsImg} alt="About Us" className="w-100" />
      </Col>
      <Col xs="12" md="5" className="d-flex flex-column justify-content-center align-items-start">
        <p className="mb-1 text-primary">ABOUT US</p>
        <h1 className="mb-4">Quienes Somos</h1>
        <p className="text-black-50 mb-4">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
          nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          Ex duo eripuit mentitum.
        </p>
        <Button as={toLink} href="/contacto" variant="outline-primary">
          Contáctenos
        </Button>
      </Col>
    </Row>
  </Container>
);

export default WhoWeAre;
