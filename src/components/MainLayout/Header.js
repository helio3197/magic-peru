import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { toNavLink, toLink } from '../../utils';

const Header = () => (
  <Navbar collapseOnSelect as="header" bg="primary" expand="sm">
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
          <Nav.Link as={toNavLink} href="/" style={({ isActive }) => (isActive ? { color: 'black' } : {})}>
            Inicio
          </Nav.Link>
          <Nav.Link as={toNavLink} href="/nosotros">
            Quienes Somos
          </Nav.Link>
          <Nav.Link as={toNavLink} href="/tours">
            Tours
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
