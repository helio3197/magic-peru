import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </Router>
);

export default App;
