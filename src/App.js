import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/MainLayout/Layout';
import Homepage from './components/Homepage/Homepage';
import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
