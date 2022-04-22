import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { toLink } from '../../utils';
import headlineImg from '../../assets/review-placeholder.png';

const Headline = () => {
  const carouselItems = [
    {
      image: headlineImg,
      title: 'Disfrute sus mejores momentos con Magic Peru Vacations',
      description: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.',
      id: 'placeholder1',
    },
    {
      image: headlineImg,
      title: 'Title 2',
      description: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.',
      id: 'placeholder2',
    },
  ];

  return (
    <Container fluid as="section" className="headline position-relative p-0 m-0">
      <Carousel variant="dark" className="w-100 headline-carousel">
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id} className="">
            <div className="position-relative d-flex justify-content-center">
              <img src={item.image} alt={item.id} className="w-100" />
              <div className="position-absolute mx-4 mx-sm-5 carousel-heading">
                <h1>{item.title}</h1>
                <p className="text-black-50 my-3">
                  {item.description}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex gap-2 gap-sm-4 position-absolute headline-buttons">
        <Button>
          Haga su reserva
        </Button>
        <Button href="/contacto" variant="outline-primary" as={toLink}>
          Contáctenos
        </Button>
      </div>
    </Container>
  );
};

export default Headline;
