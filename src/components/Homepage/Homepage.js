import Container from 'react-bootstrap/Container';
import Headline from './Headline';
import WhyUs from './WhyUs';
import Destinies from './Destinies';

const Homepage = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <Headline />
    <WhyUs />
    <Destinies />
  </Container>
);

export default Homepage;
