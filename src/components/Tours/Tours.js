import Container from 'react-bootstrap/Container';
import Contact from '../Homepage/Contact';
import ToursList from './ToursList';
import data from '../../data/info';

const Tours = () => (
  <Container fluid as="main" className="p-0 d-inline-block">
    <h1 className="text-center mt-5 mb-4">Tours y Paquetes</h1>
    {Object.keys(data).map((key, index) => (
      <ToursList
        id={`carousel-${index + 1}`}
        key={data[key].title}
        title={data[key].title}
        tours={data[key].tours}
      />
    ))}
    <Contact />
  </Container>
);

export default Tours;
