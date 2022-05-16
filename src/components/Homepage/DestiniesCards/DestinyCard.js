import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { BsStarFill, BsStar } from 'react-icons/bs';
import placeholderImg from '../../../assets/placeholder-3-2.png';
import { toLink } from '../../../utils';

const DestinyCard = ({
  image, title, description, rating, duration, languages, path,
}) => {
  const printRating = (rating) => {
    let ratingCount;

    if (rating > 5) {
      ratingCount = 5;
    } else if (rating < 0) {
      ratingCount = 0;
    } else {
      ratingCount = Math.floor(rating);
    }

    const ratingArr = [];

    for (let i = 0; i < ratingCount; i += 1) {
      ratingArr.push(<li key={i}><BsStarFill /></li>);
    }

    for (let i = 0; i < (5 - ratingCount); i += 1) {
      ratingArr.push(<li key={ratingCount + i}><BsStar /></li>);
    }

    return (
      <ul className="d-flex list-unstyled m-0 gap-1 fs-5">
        {ratingArr}
      </ul>
    );
  };

  return (
    <Card className="destiny-card h-100 shadow overflow-hidden" as={toLink} href={`/tours/${path}`}>
      <Card.Img
        variant="top"
        src={image}
        alt="Tour image"
        style={{
          objectFit: 'cover',
          aspectRatio: '3/2',
        }}
      />
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex gap-2 align-items-end mb-3">
            <h4 className="m-0">Rating:</h4>
            {printRating(rating)}
          </div>
          <h4 className="mb-3">
            Duración:
            <span className="fs-6 fw-normal ms-2">{duration}</span>
          </h4>
          <h4 className="mb-3">
            Idiomas:
            <span className="fs-6 fw-normal ms-2">{languages}</span>
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
};

DestinyCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

DestinyCard.defaultProps = {
  image: placeholderImg,
};

export default DestinyCard;
