import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.json';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Routes>
            <Route path="/" element={<MainLayout location={location}/>}>
              <Route index element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />}/>
              <Route path="/blogs" element={<BlogPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/projects">
                {ProjectDetails.map((project, index) => (
                  <Route key={index} path={`${project.id}`} element={<ProjectPage project={project} />}/>
                ))}
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
