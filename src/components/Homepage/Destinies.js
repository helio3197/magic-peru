import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImg from '../../assets/destiny-placeholder.png';

const Destinies = () => {
  const destiniesItems = [
    {
      image: placeholderImg,
      title: 'Pachacamac Adoratory',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'pachacamac-adoratory',
    },
    {
      image: placeholderImg,
      title: 'Paracas & Ica',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'pachacamac-adoratory',
    },
    {
      image: placeholderImg,
      title: 'Lima City Tour',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'pachacamac-adoratory',
    },
    {
      image: placeholderImg,
      title: 'Cusco & Machupicchu',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'pachacamac-adoratory',
    },
  ];

  return (
    <Container as="section" className="headline mt-5">
      <h2>Destinos Favoritos</h2>
      <Row xs="1" md="2" lg="4" className="mt-3 px-sm-3 px-md-0">
        {destiniesItems.map((item) => (
          <Col key={item.id} className="py-3">
            <div className="mb-4">
              <img src={item.image} alt={item.title} className="w-100" />
            </div>
            <h3 className="fs-6 text-center fw-bold mb-2">{item.title}</h3>
            <p className="small text-center">{item.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinies;
