import './App.css';
import {  Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/navbar';
import Blog from './Componets/Blog';
import Service from './Componets/navSvc'
import Contact from './Componets/ContactNav';
// rugf
// import C1 from './Components/C1';
// import C2Map from './Components/C2Map';

function App() {
  return (
    <div className="App">
      <Router>
        {/* blog star */}
        
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Section' element={<Service />} />
          <Route path='/contact' element={<Contact />} />


        </Routes>

        {/* blog end */}
        {/* service start */}


        {/* service end */}

        {/* contact nav  */}


      </Router>

    </div>
  );
}

export default App;
