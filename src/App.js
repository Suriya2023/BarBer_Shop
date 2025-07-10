import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Blog from './Componets/Blog';
import Service from './Componets/navSvc';
import Contact from './Componets/ContactNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Section" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
