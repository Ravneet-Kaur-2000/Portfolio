import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarsCanvas from './pages/StarsCanvas';
// import Resume from './pages/Resume';




export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/resume' element={<Resume />} /> */}
      </Routes>
  
    </>
  )
}

