import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/MainLayout/Layout';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Tours from './components/Tours/Tours';
import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="tours" element={<Tours />} />
      </Route>
      <Route path="*" element={<h1>Nothing Here!</h1>} />
    </Routes>
  </Router>
);

export default App;
