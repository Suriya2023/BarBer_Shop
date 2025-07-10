import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/navbar';
import Blog from './Componets/Blog';
import Service from './Componets/navSvc';
import Contact from './Componets/ContactNav';

const basename = process.env.NODE_ENV === "production" ? "/BarBer_Shop" : "/";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Section" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
