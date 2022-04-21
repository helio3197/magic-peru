import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImg from '../../assets/destiny-placeholder.png';

const PhotoGallery = () => {
  const gallery = [
    {
      image: placeholderImg,
      title: 'Image 1',
      id: 'image1',
    },
    {
      image: placeholderImg,
      title: 'Image 2',
      id: 'image 2',
    },
    {
      image: placeholderImg,
      title: 'Image 3',
      id: 'image3',
    },
    {
      image: placeholderImg,
      title: 'Image4',
      id: 'image4',
    },
    {
      image: placeholderImg,
      title: 'Image5',
      id: 'image5',
    },
    {
      image: placeholderImg,
      title: 'Image7',
      id: 'image7',
    },
    {
      image: placeholderImg,
      title: 'Image8',
      id: 'image8',
    },
    {
      image: placeholderImg,
      title: 'Image9',
      id: 'image9',
    },
  ];

  return (
    <Container as="section" className="headline mb-5">
      <h2>Galerias de Fotos</h2>
      <Row xs="1" sm="2" lg="4" className="mt-3 px-sm-3 px-md-0">
        {gallery.map((item) => (
          <Col key={item.id} className="py-3">
            <div className="mb-4">
              <img src={item.image} alt={item.title} className="w-100" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoGallery;
