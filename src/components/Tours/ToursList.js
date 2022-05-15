import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DestinyCard from '../Homepage/DestiniesCards/DestinyCard';

const ToursList = ({ title, tours, id }) => {
  const mediaMd = window.matchMedia('(max-width: 767px)');
  const mediaMdXl = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');

  const checkMediaQueries = () => {
    if (mediaMd.matches) return 1;
    if (mediaMdXl.matches) return 2;
    return 3;
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsPerRow, setCardsPerRows] = useState(checkMediaQueries());

  useEffect(() => {
    const listener = () => {
      setCardsPerRows(checkMediaQueries());
      setActiveSlide(0);
    };
    mediaMdXl.addEventListener('change', listener);

    return () => mediaMdXl.removeEventListener('change', listener);
  }, []);

  const renderCards = (cardsNumber) => {
    switch (cardsNumber) {
      case 1:
        return tours.map((item) => (
          <Carousel.Item key={item.tourName}>
            <Row>
              <Col className="py-3" style={{ maxWidth: '356px' }}>
                <DestinyCard
                  image={item.tourImg[0]}
                  title={item.tourName}
                  description={item.description}
                  rating={4}
                  duration={item.duration}
                  languages={item.idiomas}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ));
      case 2: {
        const itemsArr = [];

        for (let i = 0; i < tours.length; i += 2) {
          itemsArr.push(
            <Carousel.Item key={i}>
              <Row>
                {tours.slice(i, i + 2).map((item) => (
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
            </Carousel.Item>,
          );
        }
        return itemsArr;
      }
      case 3: {
        const itemsArr = [];

        for (let i = 0; i < tours.length; i += 3) {
          itemsArr.push(
            <Carousel.Item key={i}>
              <Row>
                {tours.slice(i, i + 3).map((item) => (
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
            </Carousel.Item>,
          );
        }
        return itemsArr;
      }
      default:
        return null;
    }
  };

  return (
    <Container as="section" className="mb-5">
      <h2 className="text-center text-decoration-underline">{title}</h2>
      <Carousel
        id={id}
        variant="dark"
        className="review-carousel tours-carousel pb-4"
        activeIndex={activeSlide}
        onSelect={(selectedSlide) => setActiveSlide(selectedSlide)}
        onSlide={() => {
          document.getElementById(id).querySelector('.carousel-inner').style.overflow = 'hidden';
        }}
        onSlid={() => {
          document.getElementById(id).querySelector('.carousel-inner').style.overflow = '';
        }}
      >
        {renderCards(cardsPerRow)}
      </Carousel>
    </Container>
  );
};

ToursList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tours: PropTypes.arrayOf(PropTypes.shape({
    tourName: PropTypes.string,
    tourImg: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    departures: PropTypes.string,
    duration: PropTypes.string,
    minimumPassegensers: PropTypes.number,
    idiomas: PropTypes.string,
  })).isRequired,
};

export default ToursList;
