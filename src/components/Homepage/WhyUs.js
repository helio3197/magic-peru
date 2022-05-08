import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiTool } from 'react-icons/fi';
import { MdAirplaneTicket } from 'react-icons/md';
import {
  FaMoneyBillWave, FaMap, FaHandHoldingUsd, FaCalendarAlt,
} from 'react-icons/fa';

const WhyUs = () => {
  const itemsArr = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Valor por su dinero',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'value',
    },
    {
      icon: <FaMap />,
      title: 'Variedad de Destinos',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'variety',
    },
    {
      icon: <FiTool />,
      title: '24/7 Soporte',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'support',
    },
    {
      icon: <FaCalendarAlt />,
      title: '+ 20 años de experiencia',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'experience',
    },
    {
      icon: <FaHandHoldingUsd />,
      title: 'Mejores precios garantizados',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'prices',
    },
    {
      icon: <MdAirplaneTicket />,
      title: 'Reservamos sus tickets de tren, avion, bus y hotel.',
      description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
      id: 'reservations',
    },
  ];

  return (
    <Container as="section" className="headline mb-5">
      <h2>Por que elegirnos?</h2>
      <p className="text-black-50 my-3">
        We help the world&apos;s leading organizations follow their shipping
      </p>
      <Row xs="1" sm="3" className="px-5 px-sm-0 mt-3">
        {itemsArr.map((item) => (
          <Col key={item.id} className="py-3">
            <div className="fs-1 text-center text-primary mb-4">
              {item.icon}
            </div>
            <h3 className="fs-6 text-center fw-bold mb-3">{item.title}</h3>
            <p className="small text-center">{item.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
