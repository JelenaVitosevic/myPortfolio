import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import About from "./pages/about";
import ProjectsPage from "./pages/projects";
import ResumePage from './pages/resume';
import SkillsPage from './pages/skills';
import EducationRoadmap from './pages/educationRoadmap';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
          <Route path='/resume' element={<ResumePage/>} />
          <Route path='/skills' element={<SkillsPage/>} />
          <Route path='/educationRoadmap' element={<EducationRoadmap/>} />
          <Route path='/contact' element={<ContactPage/>} />
       </Routes>
    </Router>
  );
}

export default App;
