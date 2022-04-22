import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { toLink } from '../../utils';

const Headline = () => (
  <Container as="section" className="headline">
    <h1>Disfrute sus mejores momentos con Magic Peru Vacations</h1>
    <p className="text-black-50 my-3">
      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
      At nam minimum ponderum. Est audiam animal molestiae te.
    </p>
    <div className="d-flex mt-5 gap-4">
      <Button>
        Haga su reserva
      </Button>
      <Button href="/contacto" variant="outline-primary" as={toLink}>
        Contáctenos
      </Button>
    </div>
  </Container>
);

export default Headline;
