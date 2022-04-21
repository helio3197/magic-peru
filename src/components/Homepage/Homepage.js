import Container from 'react-bootstrap/Container';
import Headline from './Headline';
import WhyUs from './WhyUs';

const Homepage = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <Headline />
    <WhyUs />
  </Container>
);

export default Homepage;
