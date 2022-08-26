import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about";
import ProjectsPage from "./pages/projects";
import ResimePage from './pages/resime';
import SkillsPage from './pages/skills';
import ExperiencePage from './pages/experience';
import EducationPage from './pages/education';
import EducationRoadmap from './pages/educationRoadmap';
import ContactPage from './pages/contact';




function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
          <Route path='/resime' element={<ResimePage/>} />
          <Route path='/skills' element={<SkillsPage/>} />
          <Route path='/experience' element={<ExperiencePage/>} />
          <Route path='/education' element={<EducationPage/>} />
          <Route path='/educationRoadmap' element={<EducationRoadmap/>} />
          <Route path='/contact' element={<ContactPage/>} />
       </Routes>
    </Router>
  );
}

export default App;
