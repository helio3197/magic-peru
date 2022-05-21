import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from 'react-image-gallery';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Contact from '../Homepage/Contact';
import data from '../../data/info';
import { toLink } from '../../utils';
import spinner from '../../assets/loading-spinner.svg';

const TourDetails = () => {
  const mediaXs = window.matchMedia('(max-width: 575px)');

  const checkMedia = () => {
    if (mediaXs.matches) return 'bottom';

    return 'right';
  };

  const [galleryBottom, setGalleryBottom] = useState(checkMedia());

  useEffect(() => {
    const listener = () => setGalleryBottom(checkMedia());

    mediaXs.addEventListener('change', listener);

    return () => mediaXs.removeEventListener('change', listener);
  }, []);

  const { tourDetails } = useParams();

  const tourData = Object.keys(data).reduce((result, key) => {
    const filter = data[key].tours.filter((item) => item.path === tourDetails);
    if (filter.length) result.push(filter[0]);

    return result;
  }, [])[0];

  const gallery = tourData.tourImg.map((img) => ({
    original: img,
    thumbnail: img,
    loading: spinner,
    thumbnailLoading: spinner,
  }));

  return (
    <Container fluid as="main" className="p-0 d-inline-block">
      <Container as="section" className="tour-details">
        <Breadcrumb className="mt-1 mt-sm-3">
          <Breadcrumb.Item linkAs={toLink} href="/tours">
            Volver a lista de tours
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center mb-4">{tourData.tourName}</h1>
        <ReactImageGallery
          items={gallery}
          thumbnailPosition={galleryBottom}
          disableThumbnailScroll
          disableThumbnailSwipe
        />
        <Row className="mt-4">
          <Col xs="12" lg="8">
            <h2>Descripción:</h2>
            <p>
              {tourData.description}
            </p>
          </Col>
          <Col xs="12" lg="4">
            <Card bg="primary">
              <ListGroup>
                <Container fluid className="px-2">
                  <Row xs="1" sm="2" lg="1" className="px-1">
                    <Col className="p-0">
                      <ListGroup.Item className="bg-primary h-100">
                        <h2 className="fs-4">Salidas:</h2>
                        <p>{tourData.departures}</p>
                      </ListGroup.Item>
                    </Col>
                    <Col className="p-0">
                      <ListGroup.Item className="bg-primary h-100">
                        <h2 className="fs-4">Duración:</h2>
                        <p>{tourData.duration}</p>
                      </ListGroup.Item>
                    </Col>
                    <Col className="p-0">
                      <ListGroup.Item className="bg-primary h-100">
                        <h2 className="fs-4">Idiomas:</h2>
                        <p>{tourData.idiomas}</p>
                        <p>{tourData.departures}</p>
                      </ListGroup.Item>
                    </Col>
                    <Col className="p-0">
                      <ListGroup.Item className="bg-primary h-100">
                        <h2 className="fs-4">Mínimo de pasajeros:</h2>
                        <p>{tourData.minimumPassegensers}</p>
                      </ListGroup.Item>
                    </Col>
                  </Row>
                </Container>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Contact />
    </Container>
  );
};

export default TourDetails;
