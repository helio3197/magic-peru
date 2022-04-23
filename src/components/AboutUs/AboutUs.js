import Container from 'react-bootstrap/Container';
import Contact from '../Homepage/Contact';
import WhoWeAre from './WhoWeAre';
import OurMission from './OurMission';
import OurServices from './OurServices';

const AboutUs = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <WhoWeAre />
    <OurMission />
    <OurServices />
    <Contact id="contact" />
  </Container>
);

export default AboutUs;
