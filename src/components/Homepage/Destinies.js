import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DestinyCard from './DestiniesCards/DestinyCard';
// import placeholderImg from '../../assets/destiny-placeholder.png';
// import pachaImg from '../../assets/lima/pachacamac/pacha-1.jpg';
import favorites from '../../data/favorites';

const Destinies = ({ id }) => {
  /*
  const destiniesItems = [
    {
      image: pachaImg,
      title: 'Pachacamac Adoratory',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'pachacamac-adoratory',
    },
    {
      image: placeholderImg,
      title: 'Paracas & Ica',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'paracas-icas',
    },
    {
      image: placeholderImg,
      title: 'Lima City Tour',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'lima-city',
    },
    {
      image: placeholderImg,
      title: 'Cusco & Machupicchu',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
      id: 'cusco-machupicchu',
    },
  ];
  */

  const destiniesItems = favorites;

  return (
    <Container as="section" className="headline mt-5" id={id}>
      <h2>Destinos Favoritos</h2>
      <Row xs="1" className="mt-3 px-sm-3 px-md-0 justify-content-center">
        {destiniesItems.map((item) => (
          <Col key={item.tourName} className="py-3" style={{ maxWidth: '356px' }}>
            <DestinyCard
              image={item.tourImg[0]}
              title={item.tourName}
              description={item.description}
              rating={4}
              duration={item.duration}
              languages={item.idiomas}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Destinies.propTypes = {
  id: PropTypes.string,
};

Destinies.defaultProps = {
  id: undefined,
};

export default Destinies;
