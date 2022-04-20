import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import toLink from '../../utils';

const Header = () => (
  <Navbar as="header" expand="sm" className="border-bottom">
    <Container>
      <Navbar.Brand
        className="ms-md-5"
        href="/"
        as={toLink}
      >
        LOGO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto gap-sm-3">
          <Nav.Link as={toLink} href="/inicio">
            Inicio
          </Nav.Link>
          <Nav.Link as={toLink} href="/nosotros">
            Quienes Somos
          </Nav.Link>
          <Nav.Link as={toLink} href="/tours">
            Tours
          </Nav.Link>
          <Nav.Link as={toLink} href="/contacto">
            Contáctenos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
