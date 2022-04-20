import { Link } from 'react-router-dom';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toLink from '../utils';

const Footer = () => (
  <Container fluid as="footer" className="p-0 bg-secondary">
    <Container className="py-4">
      <Row xs="1" sm="2" md="4">
        <Col>
          <div className="px-3 p-sm-0">
            <NavbarBrand
              href="/"
              as={toLink}
            >
              LOGO
            </NavbarBrand>
            <p className="my-4 small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
              pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
              Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
            </p>
          </div>
        </Col>
        <Col>
          <div className="px-3 p-sm-0">
            <h2 className="fs-6">Contáctenos</h2>
            <ul className="my-4 list-unstyled">
              <li className="mb-2 text-black-50">
                email: prueba@gmail.com
              </li>
              <li className="mb-2 text-black-50">
                telefono : 555 - 5555
              </li>
              <li className="mb-2 text-black-50">
                direccion: av universitaria 8788
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="px-3 p-sm-0">
            <h2 className="fs-6">Links</h2>
            <ul className="my-4 list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-black-50 text-decoration-none">
                  inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios" className="text-black-50 text-decoration-none">
                  servicios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/tours" className="text-black-50 text-decoration-none">
                  tours
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/galeria" className="text-black-50 text-decoration-none">
                  galería
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contacto" className="text-black-50 text-decoration-none">
                  contacto
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="px-3 p-sm-0">
            <h2 className="fs-6">Redes Sociales</h2>
            <ul className="my-4 list-unstyled">
              <li className="mb-2">
                <a
                  href="https://facebook.com"
                  className="text-black-50 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://instagram.com"
                  className="text-black-50 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Footer;
