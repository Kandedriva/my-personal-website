
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components.js/Navbar';
import TechnicalSkills from './Components.js/TechnicalSkills';
import Education from './Components.js/Education';
import AboutMe from './Components.js/AboutMe';
import Experience from './Components.js/Experience';
import Projects from './Components.js/Projects';
import Footer from './Components.js/Footer';


function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <TechnicalSkills />
                <Education />
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
