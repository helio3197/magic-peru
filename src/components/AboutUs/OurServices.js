import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const OurServices = () => {
  const servicesArr = [
    '- Diseño de viajes personalizados y actividades totalmente a medida.',
    '- Acceso a experiencias únicas y tours exclusivos a lo largo de todo el Perú.',
    '- Guías locales especializados y altamente capacitados para cada región y cada actividad.',
    '- Transporte sumamente cómodo mientras viaja por el Perú.',
    '- Recorridos seleccionados cuidadosamente, productos y establecimientos probados y comprobados por nosotros.',
    '- Centros operacionales en los ejes de Perú: Lima, Cuzco, Valle Sagrado y Paracas.',
    '- Hospitalidad personalizada en ciertos hoteles: Luxury Collection y JW Marriot Cusco.',
  ];

  let id = 0;

  return (
    <Container as="section">
      <h2 className="text-center mb-5">¿Qué les ofrecemos a nuestros huéspedes viajeros?</h2>
      <ListGroup as="ul" className="px-lg-5">
        {servicesArr.map((item, index) => {
          id += 1;
          return (
            <ListGroup.Item as="li" key={id} variant={((index + 1) % 2 === 0) ? 'primary' : 'secondary'}>
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default OurServices;
