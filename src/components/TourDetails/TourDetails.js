import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Contact from '../Homepage/Contact';
import data from '../../data/info';
import { toLink } from '../../utils';

const TourDetails = () => {
  const { tourDetails } = useParams();

  const tourData = Object.keys(data).reduce((result, key) => {
    const filter = data[key].tours.filter((item) => item.path === tourDetails);
    if (filter.length) result.push(filter[0]);

    return result;
  }, [])[0];

  return (
    <Container fluid as="main" className="p-0 d-inline-block">
      <Container as="section">
        <Breadcrumb className="mt-1 mt-sm-3">
          <Breadcrumb.Item linkAs={toLink} href="/tours">
            Volver a lista de tours
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center mb-4">{tourData.tourName}</h1>
        <Row className="mt-1">
          <Col xs="12" lg="8">
            <Image src={tourData.tourImg[0]} fluid className="w-100" style={{ aspectRatio: '3 / 2' }} />
          </Col>
          <Col xs="12" lg="4" className="pt-3 pt-lg-0">
            <h2>Descripción:</h2>
            <p>
              {tourData.description}
            </p>
          </Col>
        </Row>
        <h2 className="fs-3">Salidas:</h2>
        <p>{tourData.departures}</p>
        <h2 className="fs-3">Duración:</h2>
        <p>{tourData.duration}</p>
        <h2 className="fs-3">Idiomas:</h2>
        <p>{tourData.idiomas}</p>
      </Container>
      <Contact />
    </Container>
  );
};

export default TourDetails;
