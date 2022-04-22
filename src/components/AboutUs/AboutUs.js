import Container from 'react-bootstrap/Container';
import Contact from '../Homepage/Contact';
import WhoWeAre from './WhoWeAre';

const AboutUs = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <WhoWeAre />
    <Contact id="contact" />
  </Container>
);

export default AboutUs;
