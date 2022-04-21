import Container from 'react-bootstrap/Container';
import Headline from './Headline';
import WhyUs from './WhyUs';
import Destinies from './Destinies';
import PhotoGallery from './PhotoGallery';

const Homepage = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <Headline />
    <WhyUs />
    <Destinies />
    <PhotoGallery />
  </Container>
);

export default Homepage;
