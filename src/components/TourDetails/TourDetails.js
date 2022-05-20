import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Contact from '../Homepage/Contact';
import data from '../../data/info';

const TourDetails = () => {
  const { tourDetails } = useParams();

  const tourData = Object.keys(data).reduce((result, key) => {
    const filter = data[key].tours.filter((item) => item.path === tourDetails);
    if (filter.length) result.push(filter[0]);

    return result;
  }, [])[0];

  return (
    <Container fluid as="main" className="p-0 d-inline-block">
      <h1 className="text-center mt-5 mb-4">{tourData.tourName}</h1>
      <Contact />
    </Container>
  );
};

export default TourDetails;
