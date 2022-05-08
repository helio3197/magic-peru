import Container from 'react-bootstrap/Container';
import Headline from './Headline';
import WhyUs from './WhyUs';
import Destinies from './Destinies';
import PhotoGallery from './PhotoGallery';
import Reviews from './Reviews';
import Contact from './Contact';

const Homepage = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <Headline />
    <WhyUs />
    <Destinies id="favorites" />
    <PhotoGallery />
    <Reviews />
    <Contact id="contact" />
  </Container>
);

export default Homepage;
