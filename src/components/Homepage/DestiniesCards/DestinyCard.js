import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { BsStarFill, BsStar } from 'react-icons/bs';

const DestinyCard = ({
  image, name, description, rating, duration, languages,
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

    for (let i = 0; i < ratingCount.length; i += 1) {
      ratingArr.push(<li><BsStarFill /></li>);
    }

    for (let i = 0; i < (5 - ratingCount.length); i += 1) {
      ratingArr.push(<li><BsStar /></li>);
    }

    return (
      <ul className="d-flex">
        {ratingArr}
      </ul>
    );
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <div>
        <p>Rating:</p>
        {printRating(rating)}
      </div>
      <p>
        Duración:
        {' '}
        {duration}
      </p>
      <p>
        Idiomas:
        {' '}
        {languages}
      </p>
    </Card>
  );
};

DestinyCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
};

DestinyCard.defaultProps = {
  image: '../../../assets/placeholder-3-2.png',
};

export default DestinyCard;
