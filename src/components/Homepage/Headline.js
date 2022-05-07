import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import headlineImg from '../../assets/review-placeholder.png';
import huacachina from '../../assets/slider-pics/huacachina-4.jpg';
import machu from '../../assets/slider-pics/machu-2.jpg';
import plaza from '../../assets/slider-pics/plaza-1.jpg';

const Headline = () => {
  const carouselItems = [
    {
      image: huacachina,
      title: 'Disfrute sus mejores momentos con Magic Peru Vacations',
      description: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.',
      id: 'huacachina',
    },
    {
      image: machu,
      title: 'Title 2',
      description: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.',
      id: 'machu',
    },
    {
      image: plaza,
      title: 'Title 2',
      description: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.',
      id: 'plaza',
    },
  ];

  return (
    <Container fluid as="section" className="headline position-relative p-0 m-0">
      <Carousel className="w-100 headline-carousel">
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id} className="">
            <div className="position-relative d-flex justify-content-center">
              <img src={item.image} alt={item.id} className="w-100" />
              <div className="position-absolute mx-4 mx-sm-5 carousel-heading">
                <h1 className="text-primary">{item.title}</h1>
                <p className="my-3">
                  {item.description}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex gap-2 gap-sm-4 position-absolute headline-buttons">
        <Button href="#favorites">
          Destinos
        </Button>
        <Button href="#contact" variant="outline-primary" className="carousel-alt-btn">
          Contáctenos
        </Button>
      </div>
    </Container>
  );
};

export default Headline;
