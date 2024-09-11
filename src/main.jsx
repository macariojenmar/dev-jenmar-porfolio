import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/ui/navigation/NavigationBar';
import MuiThemeProvider from './providers/MuiThemeProvider';
import HomePage from './components/ui/pages/HomePage';
import AboutPage from './components/ui/pages/AboutPage';
import ContactPage from './components/ui/pages/ContactPage';
import ProjectsPage from './components/ui/pages/ProjectsPage';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </MuiThemeProvider>
  </BrowserRouter>
);