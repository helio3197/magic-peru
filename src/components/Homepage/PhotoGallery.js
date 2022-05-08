import Container from 'react-bootstrap/Container';
import ReactImageGallery from 'react-image-gallery';
// import placeholderImg from '../../assets/destiny-placeholder.png';
import caballoPaso1 from '../../assets/lima/caballo-de-paso/paso-1.jpg';
import caballoPaso2 from '../../assets/lima/caballo-de-paso/paso-2.jpg';
import caballoPaso3 from '../../assets/lima/caballo-de-paso/paso-3.jpg';
import caballoPaso4 from '../../assets/lima/caballo-de-paso/paso-4.jpg';
import caballoPaso5 from '../../assets/lima/caballo-de-paso/paso-5.jpg';

const PhotoGallery = () => {
  const gallery = [
    {
      original: caballoPaso1,
      thumbnail: caballoPaso1,
    },
    {
      original: caballoPaso2,
      thumbnail: caballoPaso2,
    },
    {
      original: caballoPaso3,
      thumbnail: caballoPaso3,
    },
    {
      original: caballoPaso4,
      thumbnail: caballoPaso4,
    },
    {
      original: caballoPaso5,
      thumbnail: caballoPaso5,
    },
  ];

  return (
    <Container as="section" className="headline mb-5">
      <h2 className="mb-4">Galería de Fotos</h2>
      <ReactImageGallery items={gallery} />
    </Container>
  );
};

export default PhotoGallery;
