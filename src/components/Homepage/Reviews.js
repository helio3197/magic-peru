import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft } from 'react-icons/fa';
import reviewImg from '../../assets/review-placeholder.png';

const Reviews = () => {
  const reviewsArr = [
    {
      image: reviewImg,
      review: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.',
      author: 'Connie Robertson at Google',
      id: 'review1',
    },
    {
      image: reviewImg,
      review: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.',
      author: 'Reviewer 2',
      id: 'review2',
    },
  ];

  return (
    <Container as="section" className="headline mt-5">
      <h2 className="mb-5">Testimoniales</h2>
      <Carousel variant="dark" className="review-carousel px-md-5 px-lg-0">
        {reviewsArr.map((item) => (
          <Carousel.Item key={item.id}>
            <Container fluid>
              <Row xs="1" lg="2" className="px-3 pb-5">
                <Col className="py-2">
                  <img src={item.image} alt={`${item.author} review`} className="w-100" />
                </Col>
                <Col>
                  <div className="fs-1 text-primary">
                    <FaQuoteLeft />
                  </div>
                  <p className="mt-2 mb-4">
                    {item.review}
                  </p>
                  <small className="text-black-50">
                    {item.author}
                  </small>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Reviews;
