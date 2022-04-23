import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiBox, FiTruck } from 'react-icons/fi';
import ourMissionImg from '../../assets/contact-placeholder.png';

const OurMission = () => (
  <Container as="section">
    <Row xs="1" md="2">
      <Col className="d-flex flex-column justify-content-center order-last order-md-first">
        <h2 className="mb-5">Nuestra mision</h2>
        <Row xs="2">
          <Col>
            <div className="text-primary fs-1 text-center mb-3">
              <FiBox />
            </div>
            <p className="text-black-50 small text-center">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum.
            </p>
          </Col>
          <Col>
            <div className="text-primary fs-1 text-center mb-3">
              <FiTruck />
            </div>
            <p className="text-black-50 small text-center">
              At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </p>
          </Col>
        </Row>
      </Col>
      <Col>
        <img src={ourMissionImg} alt="placeholder" className="w-100" />
      </Col>
    </Row>
  </Container>
);

export default OurMission;
